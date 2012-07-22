import BudgetFlow

dataSeriesJs :: (Name, [Money]) -> String
dataSeriesJs (name, bals) = "[\"" ++ name ++ "\", " ++ show (map realMoneyValue bals) ++ "], "

outputChartJs :: [(Name, [Money])] -> String
outputChartJs series =
  "var data_series = [" ++ (concat $ map dataSeriesJs series) ++ "];"

sampleChartJs = steps 10 sampleGraph

main = print sampleGraph
