import BudgetFlow

dataSeriesJs :: (Name, [Money]) -> String
dataSeriesJs (name, bals) = "[\"" ++ name ++ "\", " ++ show (map realMoneyValue bals) ++ "], "

outputChartJs :: [(Name, [Money])] -> String
outputChartJs series =
  "var data_series = [" ++ (concat $ map dataSeriesJs series) ++ "];"

sampleChartJs = outputChartJs $ accountHistories $ steps 10 sampleGraph

main = putStrLn sampleChartJs
