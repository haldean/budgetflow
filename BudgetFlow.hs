module BudgetFlow where

--import Data.Map (Map, fromListWith, toAscList)

-- Types

data Money = Money Integer
instance Show Money where
  show (Money val) = (show val) ++ " cents"

zero = Money 0

moneyValue :: Money -> Integer
moneyValue (Money val) = val

realMoneyValue :: Money -> Float
realMoneyValue (Money val) = fromIntegral val / 100.0

type Name = String
type Percentage = Float

data NodeType
  = Income Money
  | Expenditure
  | Account { balance :: Money, growth :: Percentage }
  deriving Show

data Amount
  = AbsoluteAmount Money
  | RelativeAmount Percentage
  deriving Show

data Edge = Edge { edgeAmount :: Amount, edgeNode :: Node } deriving Show

data Node = Node Name NodeType [Edge] deriving Show
data Graph = Graph Node deriving Show

-- Account operations

nodeValue :: NodeType -> Money
nodeValue node = case node of
  Income val -> val
  Expenditure -> zero
  Account bal _ -> bal

amountValue :: Amount -> NodeType -> Money
amountValue (AbsoluteAmount (Money amount)) node =
  Money $ min amount (moneyValue $ nodeValue node)

amountValue (RelativeAmount percent) node =
  Money $ round $ min 1.0 percent * fromIntegral (moneyValue $ nodeValue node)

deposit :: NodeType -> NodeType -> Amount -> NodeType
deposit depositFrom (Account (Money bal) grow) amount =
  Account (Money (bal + transfer)) grow
    where transfer = moneyValue $ amountValue amount depositFrom
deposit _ Expenditure _ = Expenditure

withdraw :: NodeType -> Amount -> NodeType
withdraw (Income x) _ = Income x
withdraw (Account (Money bal) grow) amount =
  Account (Money $ max 0 (bal - transfer)) grow
    where transfer = moneyValue $ amountValue amount (Account (Money bal) grow)

-- Sample graph

sampleGraph = Graph $
  Node "Income" (Income (Money 666666))
    [Edge (RelativeAmount 0.5)
        (Node "Checking account" (Account zero 0)
          [Edge (AbsoluteAmount (Money 40000))
              (Node "Food" Expenditure [])]),
     Edge (RelativeAmount 0.5)
        (Node "Savings account" (Account zero 0.03) [])]

-- Flow simulation

withdrawAlongEdge :: NodeType -> Edge -> NodeType
withdrawAlongEdge withdrawFrom (Edge amount _) =
  withdraw withdrawFrom amount

allWithdrawals :: NodeType -> [Edge] -> NodeType
allWithdrawals = foldl withdrawAlongEdge

applyInterest :: NodeType -> NodeType
applyInterest (Account (Money bal) grow) =
  Account (Money (bal + round (grow * fromIntegral bal))) grow
applyInterest nodeType = nodeType

stepEdge :: NodeType -> Edge -> Edge
stepEdge withdrawFrom (Edge amount (Node name depositTo children)) =
  Edge amount $ stepNode (Node name newNodeType children)
    where
      newNodeType = deposit withdrawFrom depositTo amount

stepNode :: Node -> Node
stepNode (Node name nodeType children) =
  Node name nodeType' children'
    where
      nodeType' = applyInterest $ allWithdrawals nodeType children
      children' = map (stepEdge nodeType) children

step :: Graph -> Graph
step (Graph root) = Graph $ stepNode root

-- Data aggregation

steps :: Integer -> Graph -> [Graph]
steps n graph =
  if n == 0 then [] else
    let graph' = step graph
    in graph' : steps (n - 1) graph'

extractAccounts :: Graph -> [(Name, Money)]
extractAccounts (Graph root) = map stripEdges $ accountNodes root

stripEdges :: Node -> (Name, Money)
stripEdges (Node name (Account bal _) _) = (name, bal)

accountNodes :: Node -> [Node]
accountNodes (Node x (Account y z) children) =
  (Node x (Account y z) children) : concatMap (accountNodes . edgeNode) children
accountNodes (Node _ _ children) =
  concatMap (accountNodes . edgeNode) children

{-
aggregateAccounts :: [(Name, Money)] -> Map Name [Money]
aggregateAccounts accounts =
  fromListWith (\x y -> y ++ x) $ map (\(name, val) -> (name, [val])) accounts

accountHistories :: [Graph] -> [(Name, [Money])]
accountHistories graphs =
  toAscList $ aggregateAccounts $ concat $ map extractAccounts graphs
  
-}
