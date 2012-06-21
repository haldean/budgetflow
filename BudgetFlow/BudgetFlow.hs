module BudgetFlow where

import Numeric

-- Types

newtype Money = Money Integer
instance Show Money where
  --show (Money val) = "$" ++ (show (fromIntegral val / 100.0))
  show (Money val) = "$" ++ (show val)

zero = (Money 0)
moneyValue :: Money -> Integer
moneyValue (Money val) = val

type Name = String
type Percentage = Double

data NodeType
  = Income Money
  | Expenditure
  | Account { balance :: Money, growth :: Percentage }
  deriving Show

data Amount
  = AbsoluteAmount Money
  | RelativeAmount Percentage
  deriving Show

data Edge = Edge Amount Node deriving Show

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
deposit _ exp@(Expenditure) _ = exp

withdraw :: NodeType -> Amount -> NodeType
withdraw withdrawFrom@(Income _) _ = withdrawFrom
withdraw withdrawFrom@(Account (Money bal) grow) amount =
  Account (Money $ max 0 (bal - transfer)) grow
    where transfer = moneyValue $ amountValue amount withdrawFrom

-- Sample graph

sampleGraph = Graph $
  Node "Income" (Income (Money 666666))
    [(Edge (RelativeAmount 0.5)
        (Node "Checking account" (Account zero 0)
          [(Edge (AbsoluteAmount (Money 40000))
              (Node "Food" (Expenditure) []))])),
     (Edge (RelativeAmount 0.5)
        (Node "Savings account" (Account zero 0.05) []))]

-- Flow simulation

withdrawAlongEdge :: NodeType -> Edge -> NodeType
withdrawAlongEdge withdrawFrom (Edge amount _) =
  withdraw withdrawFrom amount

allWithdrawals :: NodeType -> [Edge] -> NodeType
allWithdrawals withdrawFrom [] = withdrawFrom
allWithdrawals withdrawFrom (edge:rest) =
  allWithdrawals (withdrawAlongEdge withdrawFrom edge) rest

applyInterest :: NodeType -> NodeType
applyInterest (Account (Money bal) grow) =
  Account (Money (bal + (round $ grow * fromIntegral bal))) grow
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

-- Simulation aggregation

steps :: Integer -> Graph -> [Graph]
steps n graph
  | n == 0 = []
  | n > 0  =
    let graph' = step graph
    in graph' : steps (n - 1) graph'
