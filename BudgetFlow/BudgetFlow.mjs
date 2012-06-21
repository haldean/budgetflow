// BudgetFlow
var $BudgetFlow=
 ($BudgetFlow ? $BudgetFlow : {});
$BudgetFlow.$zero=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$primIntToInteger,[0]);}),[]);
$BudgetFlow.$nodeValue=
 new _F_(function($node)
         {var $__=
           _e_($node);
          var $__swJSW0__0;
          switch($__._tag_)
           {case 0:
             $__swJSW0__0=
              $__.balance;
             break;
            case 1:
             $__swJSW0__0=
              $BudgetFlow.$zero;
             break;
            case 2:
             $__swJSW0__0=
              $__._1;
             break;}
          return $__swJSW0__0;});
$BudgetFlow.$moneyValue=
 new _F_(function($__)
         {return $__;});
$BudgetFlow.$__5__12=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["has no field selection 'BudgetFlow.growth'"]);}),[]);
$BudgetFlow.$growthNEWdatafield__sel__error=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$error,[$BudgetFlow.$__5__12]);}),[]);
$BudgetFlow.$growth=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__swJSW1__0;
          switch($__2._tag_)
           {case 0:
             $__swJSW1__0=
              $__2.growth;
             break;
            case 1:
             $__swJSW1__0=
              $BudgetFlow.$growthNEWdatafield__sel__error;
             break;
            case 2:
             $__swJSW1__0=
              $BudgetFlow.$growthNEWdatafield__sel__error;
             break;}
          return $__swJSW1__0;});
$BudgetFlow.$__5__20=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["has no field selection 'BudgetFlow.balance'"]);}),[]);
$BudgetFlow.$balanceNEWdatafield__sel__error=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$error,[$BudgetFlow.$__5__20]);}),[]);
$BudgetFlow.$balance=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__swJSW2__0;
          switch($__2._tag_)
           {case 0:
             $__swJSW2__0=
              $__2.balance;
             break;
            case 1:
             $__swJSW2__0=
              $BudgetFlow.$balanceNEWdatafield__sel__error;
             break;
            case 2:
             $__swJSW2__0=
              $BudgetFlow.$balanceNEWdatafield__sel__error;
             break;}
          return $__swJSW2__0;});
$BudgetFlow.$Show__DCT1__0__0DFLUHC_2eBase_2eshow=
 new _F_(function($__)
         {var $__2=
           new _A_($UHC.$Base.$show,[$UHC.$Base.$Show__DCT74__157__0,$__]);
          var $__3=
           new _A_($UHC.$Base.$packedStringToString,["$"]);
          return new _A_($UHC.$Base.$_2b_2b,[$__3,$__2]);});
$BudgetFlow.$Show__NEW16UNQ565DCT1__0__0RDC=
 new _F_(function($Show__)
         {var $Show__2=
           new _A_($BudgetFlow.$Show__NEW18UNQ567EVLDCT1__0__0RDC,[$Show__]);
          return $Show__2;});
$BudgetFlow.$Show__NEW18UNQ567EVLDCT1__0__0RDC=
 new _F_(function($Show__)
         {var $Show__2=
           _e_(new _A_($UHC.$Base.$Show__CLS74__43__0,[$Show__]));
          var $__6=
           {_tag_:0,_1:$BudgetFlow.$Show__DCT1__0__0DFLUHC_2eBase_2eshow,_2:$Show__2._2,_3:$Show__2._3};
          return $__6;});
$BudgetFlow.$Show__UNQ565DCT1__0__0RDC=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Show__NEW16UNQ565DCT1__0__0RDC,[$BudgetFlow.$Show__UNQ565DCT1__0__0RDC]);}),[]);
$BudgetFlow.$Show__DCT1__0__0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$Show__UNQ565DCT1__0__0RDC;}),[]);
$BudgetFlow.$__1__2__0DFLUHC_2eBase_2eshowsPrec=
 new _F_(function($d,$x__1)
         {var $x__13=
           _e_($x__1);
          var $__swJSW4__0;
          switch($x__13._tag_)
           {case 0:
             var $__=
              new _A_($UHC.$Base.$showsPrec,[$UHC.$Base.$Show__DCT74__266__0,11,$x__13.growth]);
             var $__7=
              new _A_($UHC.$Base.$packedStringToString,[" "]);
             var $__8=
              new _A_($UHC.$Base.$showString,[$__7]);
             var $__9=
              new _A_($UHC.$Base.$_2e,[$__8,$__]);
             var $__10=
              new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$Show__DCT1__0__0,11,$x__13.balance]);
             var $__11=
              new _A_($UHC.$Base.$_2e,[$__10,$__9]);
             var $__12=
              new _A_($UHC.$Base.$packedStringToString,["Account "]);
             var $__13=
              new _A_($UHC.$Base.$showString,[$__12]);
             var $__14=
              new _A_($UHC.$Base.$_2e,[$__13,$__11]);
             var $__15=
              new _A_($UHC.$Base.$primGtInt,[$d,10]);
             var $__16=
              new _A_($UHC.$Base.$showParen,[$__15,$__14]);
             $__swJSW4__0=
              $__16;
             break;
            case 1:
             var $__=
              new _A_($UHC.$Base.$packedStringToString,["Expenditure"]);
             var $__18=
              new _A_($UHC.$Base.$showString,[$__]);
             $__swJSW4__0=
              $__18;
             break;
            case 2:
             var $__=
              new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$Show__DCT1__0__0,11,$x__13._1]);
             var $__21=
              new _A_($UHC.$Base.$packedStringToString,["Income "]);
             var $__22=
              new _A_($UHC.$Base.$showString,[$__21]);
             var $__23=
              new _A_($UHC.$Base.$_2e,[$__22,$__]);
             var $__24=
              new _A_($UHC.$Base.$primGtInt,[$d,10]);
             var $__25=
              new _A_($UHC.$Base.$showParen,[$__24,$__23]);
             $__swJSW4__0=
              $__25;
             break;}
          return $__swJSW4__0;});
$BudgetFlow.$__1__2__0NEW44UNQ550RDC=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__1__2__0NEW46UNQ554EVLRDC,[$__]);
          return $__2;});
$BudgetFlow.$__1__2__0NEW46UNQ554EVLRDC=
 new _F_(function($__)
         {var $Show__=
           _e_(new _A_($UHC.$Base.$Show__CLS74__43__0,[$__]));
          var $__6=
           {_tag_:0,_1:$Show__._1,_2:$Show__._2,_3:$BudgetFlow.$__1__2__0DFLUHC_2eBase_2eshowsPrec};
          return $__6;});
$BudgetFlow.$__1__2__0UNQ550RDC=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__1__2__0NEW44UNQ550RDC,[$BudgetFlow.$__1__2__0UNQ550RDC]);}),[]);
$BudgetFlow.$__1__2__0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__1__2__0UNQ550RDC;}),[]);
$BudgetFlow.$__1__3__0DFLUHC_2eBase_2eshowsPrec=
 new _F_(function($d,$x__1)
         {var $x__13=
           _e_($x__1);
          var $__swJSW6__0;
          switch($x__13._tag_)
           {case 0:
             var $__=
              new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$Show__DCT1__0__0,11,$x__13._1]);
             var $__6=
              new _A_($UHC.$Base.$packedStringToString,["AbsoluteAmount "]);
             var $__7=
              new _A_($UHC.$Base.$showString,[$__6]);
             var $__8=
              new _A_($UHC.$Base.$_2e,[$__7,$__]);
             var $__9=
              new _A_($UHC.$Base.$primGtInt,[$d,10]);
             var $__10=
              new _A_($UHC.$Base.$showParen,[$__9,$__8]);
             $__swJSW6__0=
              $__10;
             break;
            case 1:
             var $__=
              new _A_($UHC.$Base.$showsPrec,[$UHC.$Base.$Show__DCT74__266__0,11,$x__13._1]);
             var $__13=
              new _A_($UHC.$Base.$packedStringToString,["RelativeAmount "]);
             var $__14=
              new _A_($UHC.$Base.$showString,[$__13]);
             var $__15=
              new _A_($UHC.$Base.$_2e,[$__14,$__]);
             var $__16=
              new _A_($UHC.$Base.$primGtInt,[$d,10]);
             var $__17=
              new _A_($UHC.$Base.$showParen,[$__16,$__15]);
             $__swJSW6__0=
              $__17;
             break;}
          return $__swJSW6__0;});
$BudgetFlow.$__1__3__0NEW65UNQ617RDC=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__1__3__0NEW67UNQ620EVLRDC,[$__]);
          return $__2;});
$BudgetFlow.$__1__3__0NEW67UNQ620EVLRDC=
 new _F_(function($__)
         {var $Show__=
           _e_(new _A_($UHC.$Base.$Show__CLS74__43__0,[$__]));
          var $__6=
           {_tag_:0,_1:$Show__._1,_2:$Show__._2,_3:$BudgetFlow.$__1__3__0DFLUHC_2eBase_2eshowsPrec};
          return $__6;});
$BudgetFlow.$__1__3__0UNQ617RDC=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__1__3__0NEW65UNQ617RDC,[$BudgetFlow.$__1__3__0UNQ617RDC]);}),[]);
$BudgetFlow.$__1__3__0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__1__3__0UNQ617RDC;}),[]);
$BudgetFlow.$__1__4__0DFLUHC_2eBase_2eshowsPrec=
 new _F_(function($d,$x__1)
         {var $x__13=
           _e_($x__1);
          var $__=
           new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$__1__5__0,11,$x__13._2]);
          var $__7=
           new _A_($UHC.$Base.$packedStringToString,[" "]);
          var $__8=
           new _A_($UHC.$Base.$showString,[$__7]);
          var $__9=
           new _A_($UHC.$Base.$_2e,[$__8,$__]);
          var $__10=
           new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$__1__3__0,11,$x__13._1]);
          var $__11=
           new _A_($UHC.$Base.$_2e,[$__10,$__9]);
          var $__12=
           new _A_($UHC.$Base.$packedStringToString,["Edge "]);
          var $__13=
           new _A_($UHC.$Base.$showString,[$__12]);
          var $__14=
           new _A_($UHC.$Base.$_2e,[$__13,$__11]);
          var $__15=
           new _A_($UHC.$Base.$primGtInt,[$d,10]);
          var $__16=
           new _A_($UHC.$Base.$showParen,[$__15,$__14]);
          return $__16;});
$BudgetFlow.$__1__4__0NEW85UNQ604RDC=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__1__4__0NEW87UNQ607EVLRDC,[$__]);
          return $__2;});
$BudgetFlow.$__1__4__0NEW87UNQ607EVLRDC=
 new _F_(function($__)
         {var $Show__=
           _e_(new _A_($UHC.$Base.$Show__CLS74__43__0,[$__]));
          var $__6=
           {_tag_:0,_1:$Show__._1,_2:$Show__._2,_3:$BudgetFlow.$__1__4__0DFLUHC_2eBase_2eshowsPrec};
          return $__6;});
$BudgetFlow.$__1__4__0UNQ604RDC=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__1__4__0NEW85UNQ604RDC,[$BudgetFlow.$__1__4__0UNQ604RDC]);}),[]);
$BudgetFlow.$__3__2412__1__3UNQ588=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$Show__DCT74__87__0,[$BudgetFlow.$__1__4__0]);}),[]);
$BudgetFlow.$__3__2412__1__1UNQ590=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$Show__DCT74__87__0,[$UHC.$Base.$Show__DCT74__65__0]);}),[]);
$BudgetFlow.$__1__5__0DFLUHC_2eBase_2eshowsPrec=
 new _F_(function($__,$__2,$d,$x__1)
         {var $x__15=
           _e_($x__1);
          var $__9=
           new _A_($UHC.$Base.$showsPrec,[$__2,11,$x__15._3]);
          var $__10=
           new _A_($UHC.$Base.$packedStringToString,[" "]);
          var $__11=
           new _A_($UHC.$Base.$showString,[$__10]);
          var $__12=
           new _A_($UHC.$Base.$_2e,[$__11,$__9]);
          var $__13=
           new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$__1__2__0,11,$x__15._2]);
          var $__14=
           new _A_($UHC.$Base.$_2e,[$__13,$__12]);
          var $__15=
           new _A_($UHC.$Base.$packedStringToString,[" "]);
          var $__16=
           new _A_($UHC.$Base.$showString,[$__15]);
          var $__17=
           new _A_($UHC.$Base.$_2e,[$__16,$__14]);
          var $__18=
           new _A_($UHC.$Base.$showsPrec,[$__,11,$x__15._1]);
          var $__19=
           new _A_($UHC.$Base.$_2e,[$__18,$__17]);
          var $__20=
           new _A_($UHC.$Base.$packedStringToString,["Node "]);
          var $__21=
           new _A_($UHC.$Base.$showString,[$__20]);
          var $__22=
           new _A_($UHC.$Base.$_2e,[$__21,$__19]);
          var $__23=
           new _A_($UHC.$Base.$primGtInt,[$d,10]);
          var $__24=
           new _A_($UHC.$Base.$showParen,[$__23,$__22]);
          return $__24;});
$BudgetFlow.$__1__5__0NEW112UNQ587RDC=
 new _F_(function($__,$__2,$__3)
         {var $__4=
           new _A_($BudgetFlow.$__1__5__0NEW116UNQ593EVLRDC,[$__,$__2,$__3]);
          return $__4;});
$BudgetFlow.$__1__5__0NEW116UNQ593EVLRDC=
 new _F_(function($__,$__2,$__3)
         {var $Show__=
           _e_(new _A_($UHC.$Base.$Show__CLS74__43__0,[$__]));
          var $__8=
           new _A_($BudgetFlow.$__1__5__0DFLUHC_2eBase_2eshowsPrec,[$__2,$__3]);
          var $__9=
           {_tag_:0,_1:$Show__._1,_2:$Show__._2,_3:$__8};
          return $__9;});
$BudgetFlow.$__1__5__0UNQ587RDC=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__1__5__0NEW112UNQ587RDC,[$BudgetFlow.$__1__5__0UNQ587RDC,$BudgetFlow.$__3__2412__1__1UNQ590,$BudgetFlow.$__3__2412__1__3UNQ588]);}),[]);
$BudgetFlow.$__1__4__0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__1__4__0UNQ604RDC;}),[]);
$BudgetFlow.$__1__5__0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__1__5__0UNQ587RDC;}),[]);
$BudgetFlow.$__1__6__0DFLUHC_2eBase_2eshowsPrec=
 new _F_(function($d,$x__1)
         {var $x__13=
           _e_($x__1);
          var $__=
           new _A_($UHC.$Base.$showsPrec,[$BudgetFlow.$__1__5__0,11,$x__13._1]);
          var $__6=
           new _A_($UHC.$Base.$packedStringToString,["Graph "]);
          var $__7=
           new _A_($UHC.$Base.$showString,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$_2e,[$__7,$__]);
          var $__9=
           new _A_($UHC.$Base.$primGtInt,[$d,10]);
          var $__10=
           new _A_($UHC.$Base.$showParen,[$__9,$__8]);
          return $__10;});
$BudgetFlow.$__1__6__0NEW131UNQ576RDC=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__1__6__0NEW133UNQ578EVLRDC,[$__]);
          return $__2;});
$BudgetFlow.$__1__6__0NEW133UNQ578EVLRDC=
 new _F_(function($__)
         {var $Show__=
           _e_(new _A_($UHC.$Base.$Show__CLS74__43__0,[$__]));
          var $__6=
           {_tag_:0,_1:$Show__._1,_2:$Show__._2,_3:$BudgetFlow.$__1__6__0DFLUHC_2eBase_2eshowsPrec};
          return $__6;});
$BudgetFlow.$__1__6__0UNQ576RDC=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__1__6__0NEW131UNQ576RDC,[$BudgetFlow.$__1__6__0UNQ576RDC]);}),[]);
$BudgetFlow.$__1__6__0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__1__6__0UNQ576RDC;}),[]);
$BudgetFlow.$RelativeAmount__=
 new _F_(function($x1)
         {return {_tag_:1,_1:$x1};});
$BudgetFlow.$Node__=
 new _F_(function($x1,$x2,$x3)
         {return {_tag_:0,_1:$x1,_2:$x2,_3:$x3};});
$BudgetFlow.$__Rep0NodeDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $proj__65=
           _e_($proj__3._2);
          var $__=
           new _A_($BudgetFlow.$Node__,[$proj__3._1,$proj__65._1,$proj__65._2]);
          return $__;});
$BudgetFlow.$__Rep0NodeDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__6=
           new _A_($UHC.$Base.$K1__,[$x2._3]);
          var $__7=
           new _A_($UHC.$Base.$M1__,[$__6]);
          var $__8=
           new _A_($UHC.$Base.$K1__,[$x2._2]);
          var $__9=
           new _A_($UHC.$Base.$M1__,[$__8]);
          var $__10=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__9,$__7]);
          var $__11=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
          var $__12=
           new _A_($UHC.$Base.$M1__,[$__11]);
          var $__13=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__12,$__10]);
          var $__14=
           new _A_($UHC.$Base.$M1__,[$__13]);
          var $__15=
           new _A_($UHC.$Base.$M1__,[$__14]);
          return $__15;});
$BudgetFlow.$__Rep0NodeNEW156UNQ302SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__Rep0NodeNEW158UNQ303EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$BudgetFlow.$__Rep0NodeNEW158UNQ303EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS74__369__0,[$__]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$__Rep0NodeDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$BudgetFlow.$__Rep0NodeDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$BudgetFlow.$__Rep0NodeUNQ302SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__Rep0NodeNEW156UNQ302SDCGENRepresentable0,[$BudgetFlow.$__Rep0NodeUNQ302SDCGENRepresentable0]);}),[]);
$BudgetFlow.$__Rep0NodeGENRepresentable0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__Rep0NodeUNQ302SDCGENRepresentable0;}),[]);
$BudgetFlow.$Money__=
 new _A_(new _F_(function()
                 {return $UHC.$Base.$id;}),[]);
$BudgetFlow.$__Rep0MoneyDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {return new _A_($BudgetFlow.$Money__,[$proj__1]);});
$BudgetFlow.$__Rep0MoneyDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $__=
           new _A_($UHC.$Base.$K1__,[$x]);
          var $__3=
           new _A_($UHC.$Base.$M1__,[$__]);
          var $__4=
           new _A_($UHC.$Base.$M1__,[$__3]);
          return new _A_($UHC.$Base.$M1__,[$__4]);});
$BudgetFlow.$__Rep0MoneyNEW169UNQ88SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__Rep0MoneyNEW171UNQ89EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$BudgetFlow.$__Rep0MoneyNEW171UNQ89EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS74__369__0,[$__]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$__Rep0MoneyDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$BudgetFlow.$__Rep0MoneyDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$BudgetFlow.$__Rep0MoneyUNQ88SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__Rep0MoneyNEW169UNQ88SDCGENRepresentable0,[$BudgetFlow.$__Rep0MoneyUNQ88SDCGENRepresentable0]);}),[]);
$BudgetFlow.$__Rep0MoneyGENRepresentable0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__Rep0MoneyUNQ88SDCGENRepresentable0;}),[]);
$BudgetFlow.$amountValue=
 new _F_(function($x1,$x2)
         {var $x13=
           _e_($x1);
          var $__swJSW19__0;
          switch($x13._tag_)
           {case 0:
             var $__5=
              new _A_($BudgetFlow.$nodeValue,[$x2]);
             var $__6=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$moneyValue,$__5]);
             var $__7=
              new _A_($UHC.$Base.$min,[$UHC.$Base.$Ord__DCT74__132__0,$x13._1,$__6]);
             var $__8=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$Money__,$__7]);
             $__swJSW19__0=
              $__8;
             break;
            case 1:
             var $__=
              new _A_($BudgetFlow.$nodeValue,[$x2]);
             var $__11=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$moneyValue,$__]);
             var $__12=
              new _A_($UHC.$Base.$fromIntegral,[$UHC.$Base.$Integral__DCT74__143__0,$UHC.$Base.$Num__DCT74__177__0,$__11]);
             var $__13=
              new _A_($UHC.$Base.$packedStringToInteger,["1"]);
             var $__14=
              new _A_($UHC.$Base.$packedStringToInteger,["1"]);
             var $__15=
              new _A_($UHC.$Base.$_3a_25,[$__14,$__13]);
             var $__16=
              new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT74__197__0,$__15]);
             var $__17=
              new _A_($UHC.$Base.$min,[$UHC.$Base.$Ord__DCT74__166__0,$__16,$x13._1]);
             var $__18=
              new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT74__177__0,$__17,$__12]);
             var $__19=
              new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT74__227__0,$UHC.$Base.$Integral__DCT74__143__0]);
             var $__20=
              new _A_($UHC.$Base.$_24,[$__19,$__18]);
             var $__21=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$Money__,$__20]);
             $__swJSW19__0=
              $__21;
             break;}
          return $__swJSW19__0;});
$BudgetFlow.$Income__=
 new _F_(function($x1)
         {return {_tag_:2,_1:$x1};});
$BudgetFlow.$Graph__=
 new _F_(function($x1)
         {return {_tag_:0,_1:$x1};});
$BudgetFlow.$__Rep0GraphDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {return new _A_($BudgetFlow.$Graph__,[$proj__1]);});
$BudgetFlow.$__Rep0GraphDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__4=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
          var $__5=
           new _A_($UHC.$Base.$M1__,[$__4]);
          var $__6=
           new _A_($UHC.$Base.$M1__,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$M1__,[$__6]);
          return $__7;});
$BudgetFlow.$__Rep0GraphNEW203UNQ366SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__Rep0GraphNEW205UNQ367EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$BudgetFlow.$__Rep0GraphNEW205UNQ367EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS74__369__0,[$__]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$__Rep0GraphDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$BudgetFlow.$__Rep0GraphDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$BudgetFlow.$__Rep0GraphUNQ366SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__Rep0GraphNEW203UNQ366SDCGENRepresentable0,[$BudgetFlow.$__Rep0GraphUNQ366SDCGENRepresentable0]);}),[]);
$BudgetFlow.$__Rep0GraphGENRepresentable0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__Rep0GraphUNQ366SDCGENRepresentable0;}),[]);
$BudgetFlow.$Expenditure__=
 new _A_(new _F_(function()
                 {return {_tag_:1};}),[]);
$BudgetFlow.$Edge__=
 new _F_(function($x1,$x2)
         {return {_tag_:0,_1:$x1,_2:$x2};});
$BudgetFlow.$__Rep0EdgeDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__3=
           _e_($proj__1);
          var $__=
           new _A_($BudgetFlow.$Edge__,[$proj__3._1,$proj__3._2]);
          return $__;});
$BudgetFlow.$__Rep0EdgeDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__5=
           new _A_($UHC.$Base.$K1__,[$x2._2]);
          var $__6=
           new _A_($UHC.$Base.$M1__,[$__5]);
          var $__7=
           new _A_($UHC.$Base.$K1__,[$x2._1]);
          var $__8=
           new _A_($UHC.$Base.$M1__,[$__7]);
          var $__9=
           new _A_($UHC.$Base.$_3a_2a_3a,[$__8,$__6]);
          var $__10=
           new _A_($UHC.$Base.$M1__,[$__9]);
          var $__11=
           new _A_($UHC.$Base.$M1__,[$__10]);
          return $__11;});
$BudgetFlow.$__Rep0EdgeNEW224UNQ277SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__Rep0EdgeNEW226UNQ278EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$BudgetFlow.$__Rep0EdgeNEW226UNQ278EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS74__369__0,[$__]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$__Rep0EdgeDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$BudgetFlow.$__Rep0EdgeDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$BudgetFlow.$__Rep0EdgeUNQ277SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__Rep0EdgeNEW224UNQ277SDCGENRepresentable0,[$BudgetFlow.$__Rep0EdgeUNQ277SDCGENRepresentable0]);}),[]);
$BudgetFlow.$__Rep0EdgeGENRepresentable0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__Rep0EdgeUNQ277SDCGENRepresentable0;}),[]);
$BudgetFlow.$Account__=
 new _F_(function($x1,$x2)
         {return {_tag_:0,balance:$x1,growth:$x2};});
$BudgetFlow.$__Rep0NodeTypeDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__2=
           _e_($proj__1);
          var $__swJSW25__0;
          switch($proj__2._tag_)
           {case 0:
             var $__=
              new _A_($BudgetFlow.$Income__,[$proj__2.unL1]);
             $__swJSW25__0=
              $__;
             break;
            case 1:
             var $proj__66=
              _e_($proj__2.unR1);
             var $__swJSW26__0;
             switch($proj__66._tag_)
              {case 0:
                var $proj__8=
                 _e_($proj__66.unL1);
                $__swJSW26__0=
                 $BudgetFlow.$Expenditure__;
                break;
               case 1:
                var $proj__10=
                 _e_($proj__66.unR1);
                var $__=
                 new _A_($BudgetFlow.$Account__,[$proj__10._1,$proj__10._2]);
                $__swJSW26__0=
                 $__;
                break;}
             $__swJSW25__0=
              $__swJSW26__0;
             break;}
          return $__swJSW25__0;});
$BudgetFlow.$__Rep0NodeTypeDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__swJSW29__0;
          switch($x2._tag_)
           {case 0:
             var $__5=
              new _A_($UHC.$Base.$K1__,[$x2.growth]);
             var $__6=
              new _A_($UHC.$Base.$M1__,[$__5]);
             var $__7=
              new _A_($UHC.$Base.$K1__,[$x2.balance]);
             var $__8=
              new _A_($UHC.$Base.$M1__,[$__7]);
             var $__9=
              new _A_($UHC.$Base.$_3a_2a_3a,[$__8,$__6]);
             var $__10=
              new _A_($UHC.$Base.$M1__,[$__9]);
             var $__11=
              new _A_($UHC.$Base.$R1__,[$__10]);
             var $__12=
              new _A_($UHC.$Base.$R1__,[$__11]);
             var $__13=
              new _A_($UHC.$Base.$M1__,[$__12]);
             $__swJSW29__0=
              $__13;
             break;
            case 1:
             var $__=
              new _A_($UHC.$Base.$M1__,[$UHC.$Base.$U1__]);
             var $__15=
              new _A_($UHC.$Base.$L1__,[$__]);
             var $__16=
              new _A_($UHC.$Base.$R1__,[$__15]);
             var $__17=
              new _A_($UHC.$Base.$M1__,[$__16]);
             $__swJSW29__0=
              $__17;
             break;
            case 2:
             var $__19=
              new _A_($UHC.$Base.$K1__,[$x2._1]);
             var $__20=
              new _A_($UHC.$Base.$M1__,[$__19]);
             var $__21=
              new _A_($UHC.$Base.$M1__,[$__20]);
             var $__22=
              new _A_($UHC.$Base.$L1__,[$__21]);
             var $__23=
              new _A_($UHC.$Base.$M1__,[$__22]);
             $__swJSW29__0=
              $__23;
             break;}
          return $__swJSW29__0;});
$BudgetFlow.$__Rep0NodeTypeNEW259UNQ123SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__Rep0NodeTypeNEW261UNQ124EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$BudgetFlow.$__Rep0NodeTypeNEW261UNQ124EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS74__369__0,[$__]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$__Rep0NodeTypeDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$BudgetFlow.$__Rep0NodeTypeDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$BudgetFlow.$__Rep0NodeTypeUNQ123SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__Rep0NodeTypeNEW259UNQ123SDCGENRepresentable0,[$BudgetFlow.$__Rep0NodeTypeUNQ123SDCGENRepresentable0]);}),[]);
$BudgetFlow.$__Rep0NodeTypeGENRepresentable0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__Rep0NodeTypeUNQ123SDCGENRepresentable0;}),[]);
$BudgetFlow.$applyInterest=
 new _F_(function($x1)
         {var $__=
           _e_($x1);
          var $__swJSW31__0;
          switch($__._tag_)
           {case 0:
             var $__5=
              new _A_($UHC.$Base.$fromIntegral,[$UHC.$Base.$Integral__DCT74__143__0,$UHC.$Base.$Num__DCT74__177__0,$__.balance]);
             var $__6=
              new _A_($UHC.$Base.$_2a,[$UHC.$Base.$Num__DCT74__177__0,$__.growth,$__5]);
             var $__7=
              new _A_($UHC.$Base.$round,[$UHC.$Base.$RealFrac__DCT74__227__0,$UHC.$Base.$Integral__DCT74__143__0]);
             var $__8=
              new _A_($UHC.$Base.$_24,[$__7,$__6]);
             var $__9=
              new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT74__134__0,$__.balance,$__8]);
             var $__10=
              new _A_($BudgetFlow.$Account__,[$__9,$__.growth]);
             $__swJSW31__0=
              $__10;
             break;
            case 1:
             $__swJSW31__0=
              $x1;
             break;
            case 2:
             $__swJSW31__0=
              $x1;
             break;}
          return $__swJSW31__0;});
$BudgetFlow.$deposit=
 new _F_(function($x1,$x2,$x3)
         {var $x24=
           _e_($x2);
          var $__swJSW32__0;
          switch($x24._tag_)
           {case 0:
             var $__7=
              new _A_($BudgetFlow.$amountValue,[$x3,$x1]);
             var $transfer=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$moneyValue,$__7]);
             var $__9=
              new _A_($UHC.$Base.$_2b,[$UHC.$Base.$Num__DCT74__134__0,$x24.balance,$transfer]);
             $__swJSW32__0=
              new _A_($BudgetFlow.$Account__,[$__9,$x24.growth]);
             break;
            case 1:
             $__swJSW32__0=
              $x24;
             break;
            case 2:
             $__swJSW32__0=
              $UHC.$Base.$undefined;
             break;}
          return $__swJSW32__0;});
$BudgetFlow.$withdraw=
 new _F_(function($x1,$x2)
         {var $x13=
           _e_($x1);
          var $__swJSW33__0;
          switch($x13._tag_)
           {case 0:
             var $__6=
              new _A_($BudgetFlow.$amountValue,[$x2,$x13]);
             var $transfer=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$moneyValue,$__6]);
             var $__8=
              new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT74__134__0,$x13.balance,$transfer]);
             var $__9=
              new _A_($UHC.$Base.$primIntToInteger,[0]);
             var $__10=
              new _A_($UHC.$Base.$max,[$UHC.$Base.$Ord__DCT74__132__0,$__9,$__8]);
             var $__11=
              new _A_($UHC.$Base.$_24,[$BudgetFlow.$Money__,$__10]);
             $__swJSW33__0=
              new _A_($BudgetFlow.$Account__,[$__11,$x13.growth]);
             break;
            case 1:
             $__swJSW33__0=
              $UHC.$Base.$undefined;
             break;
            case 2:
             $__swJSW33__0=
              $x13;
             break;}
          return $__swJSW33__0;});
$BudgetFlow.$withdrawAlongEdge=
 new _F_(function($withdrawFrom,$__)
         {var $__3=
           _e_($__);
          var $__6=
           new _A_($BudgetFlow.$withdraw,[$withdrawFrom,$__3._1]);
          return $__6;});
$BudgetFlow.$allWithdrawals=
 new _F_(function($x1,$x2)
         {var $x23=
           _e_($x2);
          var $__swJSW35__0;
          switch($x23._tag_)
           {case 0:
             var $__=
              new _A_($BudgetFlow.$withdrawAlongEdge,[$x1,$x23._1]);
             var $__7=
              new _A_($BudgetFlow.$allWithdrawals,[$__,$x23._2]);
             $__swJSW35__0=
              $__7;
             break;
            case 1:
             $__swJSW35__0=
              $x1;
             break;}
          return $__swJSW35__0;});
$BudgetFlow.$stepEdge=
 new _F_(function($withdrawFrom,$__)
         {var $__3=
           _e_($__);
          var $__6=
           _e_($__3._2);
          var $newNodeType=
           new _A_($BudgetFlow.$deposit,[$withdrawFrom,$__6._2,$__3._1]);
          var $__11=
           new _A_($BudgetFlow.$Node__,[$__6._1,$newNodeType,$__6._3]);
          var $__12=
           new _A_($BudgetFlow.$stepNode,[$__11]);
          var $__13=
           new _A_($BudgetFlow.$Edge__,[$__3._1]);
          return new _A_($UHC.$Base.$_24,[$__13,$__12]);});
$BudgetFlow.$stepNode=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__6=
           new _A_($BudgetFlow.$allWithdrawals,[$__2._2,$__2._3]);
          var $nodeType_27=
           new _A_($UHC.$Base.$_24,[$BudgetFlow.$applyInterest,$__6]);
          var $__8=
           new _A_($BudgetFlow.$stepEdge,[$__2._2]);
          var $children_27=
           new _A_($UHC.$Base.$map,[$__8,$__2._3]);
          return new _A_($BudgetFlow.$Node__,[$__2._1,$nodeType_27,$children_27]);});
$BudgetFlow.$step=
 new _F_(function($__)
         {var $__2=
           _e_($__);
          var $__4=
           new _A_($BudgetFlow.$stepNode,[$__2._1]);
          var $__5=
           new _A_($UHC.$Base.$_24,[$BudgetFlow.$Graph__,$__4]);
          return $__5;});
$BudgetFlow.$steps=
 new _F_(function($n,$graph)
         {var $__=
           new _A_($UHC.$Base.$primIntToInteger,[0]);
          var $__4=
           new _A_($UHC.$Base.$_3d_3d,[$UHC.$Base.$Eq__DCT74__130__0,$n,$__]);
          var $__5=
           _e_($__4);
          var $__swJSW40__0;
          switch($__5._tag_)
           {case 0:
             var $__6=
              new _A_($UHC.$Base.$primIntToInteger,[0]);
             var $__7=
              new _A_($UHC.$Base.$_3e,[$UHC.$Base.$Ord__DCT74__132__0,$n,$__6]);
             var $__8=
              _e_($__7);
             var $__swJSW41__0;
             switch($__8._tag_)
              {case 0:
                var $__9=
                 new _A_($UHC.$Base.$packedStringToString,["FAIL 2_31_0"]);
                var $__10=
                 new _A_($UHC.$Base.$error,[$__9]);
                $__swJSW41__0=
                 $__10;
                break;
               case 1:
                var $graph_27=
                 new _A_($BudgetFlow.$step,[$graph]);
                var $__12=
                 new _A_($UHC.$Base.$primIntToInteger,[1]);
                var $__13=
                 new _A_($UHC.$Base.$_2d,[$UHC.$Base.$Num__DCT74__134__0,$n,$__12]);
                var $__14=
                 new _A_($BudgetFlow.$steps,[$__13,$graph_27]);
                $__swJSW41__0=
                 new _A_($UHC.$Base.$_3a,[$graph_27,$__14]);
                break;}
             $__swJSW40__0=
              $__swJSW41__0;
             break;
            case 1:
             $__swJSW40__0=
              $UHC.$Base.$_5b_5d;
             break;}
          return $__swJSW40__0;});
$BudgetFlow.$AbsoluteAmount__=
 new _F_(function($x1)
         {return {_tag_:0,_1:$x1};});
$BudgetFlow.$__Rep0AmountDFLUHC_2eBase_2eto0GENRepresentable0=
 new _F_(function($proj__1)
         {var $proj__2=
           _e_($proj__1);
          var $__swJSW42__0;
          switch($proj__2._tag_)
           {case 0:
             var $__=
              new _A_($BudgetFlow.$AbsoluteAmount__,[$proj__2.unL1]);
             $__swJSW42__0=
              $__;
             break;
            case 1:
             var $__=
              new _A_($BudgetFlow.$RelativeAmount__,[$proj__2.unR1]);
             $__swJSW42__0=
              $__;
             break;}
          return $__swJSW42__0;});
$BudgetFlow.$__Rep0AmountDFLUHC_2eBase_2efrom0GENRepresentable0=
 new _F_(function($x)
         {var $x2=
           _e_($x);
          var $__swJSW43__0;
          switch($x2._tag_)
           {case 0:
             var $__4=
              new _A_($UHC.$Base.$K1__,[$x2._1]);
             var $__5=
              new _A_($UHC.$Base.$M1__,[$__4]);
             var $__6=
              new _A_($UHC.$Base.$M1__,[$__5]);
             var $__7=
              new _A_($UHC.$Base.$L1__,[$__6]);
             var $__8=
              new _A_($UHC.$Base.$M1__,[$__7]);
             $__swJSW43__0=
              $__8;
             break;
            case 1:
             var $__10=
              new _A_($UHC.$Base.$K1__,[$x2._1]);
             var $__11=
              new _A_($UHC.$Base.$M1__,[$__10]);
             var $__12=
              new _A_($UHC.$Base.$M1__,[$__11]);
             var $__13=
              new _A_($UHC.$Base.$R1__,[$__12]);
             var $__14=
              new _A_($UHC.$Base.$M1__,[$__13]);
             $__swJSW43__0=
              $__14;
             break;}
          return $__swJSW43__0;});
$BudgetFlow.$__Rep0AmountNEW341UNQ222SDCGENRepresentable0=
 new _F_(function($__)
         {var $__2=
           new _A_($BudgetFlow.$__Rep0AmountNEW343UNQ223EVLSDCGENRepresentable0,[$__]);
          return $__2;});
$BudgetFlow.$__Rep0AmountNEW343UNQ223EVLSDCGENRepresentable0=
 new _F_(function($__)
         {var $Representable0__=
           _e_(new _A_($UHC.$Base.$Representable0__CLS74__369__0,[$__]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$__Rep0AmountDFLUHC_2eBase_2efrom0GENRepresentable0,_2:$BudgetFlow.$__Rep0AmountDFLUHC_2eBase_2eto0GENRepresentable0};
          return $__5;});
$BudgetFlow.$__Rep0AmountUNQ222SDCGENRepresentable0=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$__Rep0AmountNEW341UNQ222SDCGENRepresentable0,[$BudgetFlow.$__Rep0AmountUNQ222SDCGENRepresentable0]);}),[]);
$BudgetFlow.$__Rep0AmountGENRepresentable0=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$__Rep0AmountUNQ222SDCGENRepresentable0;}),[]);
$BudgetFlow.$__5__719=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["20"]);}),[]);
$BudgetFlow.$__5__718=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["1"]);}),[]);
$BudgetFlow.$__5__716=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a_25,[$BudgetFlow.$__5__718,$BudgetFlow.$__5__719]);}),[]);
$BudgetFlow.$__5__714=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT74__197__0,$BudgetFlow.$__5__716]);}),[]);
$BudgetFlow.$__5__712=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Account__,[$BudgetFlow.$zero,$BudgetFlow.$__5__714]);}),[]);
$BudgetFlow.$__5__711=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["Savings account"]);}),[]);
$BudgetFlow.$__5__708=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Node__,[$BudgetFlow.$__5__711,$BudgetFlow.$__5__712,$UHC.$Base.$_5b_5d]);}),[]);
$BudgetFlow.$__5__707=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["2"]);}),[]);
$BudgetFlow.$__5__706=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["1"]);}),[]);
$BudgetFlow.$__5__704=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a_25,[$BudgetFlow.$__5__706,$BudgetFlow.$__5__707]);}),[]);
$BudgetFlow.$__5__702=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT74__197__0,$BudgetFlow.$__5__704]);}),[]);
$BudgetFlow.$__5__701=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$RelativeAmount__,[$BudgetFlow.$__5__702]);}),[]);
$BudgetFlow.$__5__699=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Edge__,[$BudgetFlow.$__5__701,$BudgetFlow.$__5__708]);}),[]);
$BudgetFlow.$__5__697=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a,[$BudgetFlow.$__5__699,$UHC.$Base.$_5b_5d]);}),[]);
$BudgetFlow.$__5__696=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["Food"]);}),[]);
$BudgetFlow.$__5__693=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Node__,[$BudgetFlow.$__5__696,$BudgetFlow.$Expenditure__,$UHC.$Base.$_5b_5d]);}),[]);
$BudgetFlow.$__5__692=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$primIntToInteger,[40000]);}),[]);
$BudgetFlow.$__5__691=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$AbsoluteAmount__,[$BudgetFlow.$__5__692]);}),[]);
$BudgetFlow.$__5__689=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Edge__,[$BudgetFlow.$__5__691,$BudgetFlow.$__5__693]);}),[]);
$BudgetFlow.$__5__687=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a,[$BudgetFlow.$__5__689,$UHC.$Base.$_5b_5d]);}),[]);
$BudgetFlow.$__5__686=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["0"]);}),[]);
$BudgetFlow.$__5__684=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromInteger,[$UHC.$Base.$Num__DCT74__177__0,$BudgetFlow.$__5__686]);}),[]);
$BudgetFlow.$__5__682=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Account__,[$BudgetFlow.$zero,$BudgetFlow.$__5__684]);}),[]);
$BudgetFlow.$__5__681=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["Checking account"]);}),[]);
$BudgetFlow.$__5__678=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Node__,[$BudgetFlow.$__5__681,$BudgetFlow.$__5__682,$BudgetFlow.$__5__687]);}),[]);
$BudgetFlow.$__5__677=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["2"]);}),[]);
$BudgetFlow.$__5__676=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToInteger,["1"]);}),[]);
$BudgetFlow.$__5__674=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a_25,[$BudgetFlow.$__5__676,$BudgetFlow.$__5__677]);}),[]);
$BudgetFlow.$__5__672=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$fromRational,[$UHC.$Base.$Fractional__DCT74__197__0,$BudgetFlow.$__5__674]);}),[]);
$BudgetFlow.$__5__671=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$RelativeAmount__,[$BudgetFlow.$__5__672]);}),[]);
$BudgetFlow.$__5__669=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Edge__,[$BudgetFlow.$__5__671,$BudgetFlow.$__5__678]);}),[]);
$BudgetFlow.$__5__667=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_3a,[$BudgetFlow.$__5__669,$BudgetFlow.$__5__697]);}),[]);
$BudgetFlow.$__5__666=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$primIntToInteger,[666666]);}),[]);
$BudgetFlow.$__5__665=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Income__,[$BudgetFlow.$__5__666]);}),[]);
$BudgetFlow.$__5__664=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$packedStringToString,["Income"]);}),[]);
$BudgetFlow.$__5__661=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$Node__,[$BudgetFlow.$__5__664,$BudgetFlow.$__5__665,$BudgetFlow.$__5__667]);}),[]);
$BudgetFlow.$sampleGraph=
 new _A_(new _F_(function()
                 {return new _A_($UHC.$Base.$_24,[$BudgetFlow.$Graph__,$BudgetFlow.$__5__661]);}),[]);
$BudgetFlow.$_24S__growthDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["growth"]);});
$BudgetFlow.$_24S__growthNEW386UNQ201SDCGENSelector=
 new _F_(function($_24S__growth)
         {var $_24S__growth2=
           new _A_($BudgetFlow.$_24S__growthNEW388UNQ202EVLSDCGENSelector,[$_24S__growth]);
          return $_24S__growth2;});
$BudgetFlow.$_24S__growthNEW388UNQ202EVLSDCGENSelector=
 new _F_(function($_24S__growth)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS74__351__0,[$_24S__growth]));
          var $__4=
           {_tag_:0,_1:$BudgetFlow.$_24S__growthDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$BudgetFlow.$_24S__growthUNQ201SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24S__growthNEW386UNQ201SDCGENSelector,[$BudgetFlow.$_24S__growthUNQ201SDCGENSelector]);}),[]);
$BudgetFlow.$_24S__growthGENSelector=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24S__growthUNQ201SDCGENSelector;}),[]);
$BudgetFlow.$_24S__balanceDFLUHC_2eBase_2eselNameGENSelector=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["balance"]);});
$BudgetFlow.$_24S__balanceNEW394UNQ196SDCGENSelector=
 new _F_(function($_24S__balance)
         {var $_24S__balance2=
           new _A_($BudgetFlow.$_24S__balanceNEW396UNQ197EVLSDCGENSelector,[$_24S__balance]);
          return $_24S__balance2;});
$BudgetFlow.$_24S__balanceNEW396UNQ197EVLSDCGENSelector=
 new _F_(function($_24S__balance)
         {var $Selector__=
           _e_(new _A_($UHC.$Base.$Selector__CLS74__351__0,[$_24S__balance]));
          var $__4=
           {_tag_:0,_1:$BudgetFlow.$_24S__balanceDFLUHC_2eBase_2eselNameGENSelector};
          return $__4;});
$BudgetFlow.$_24S__balanceUNQ196SDCGENSelector=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24S__balanceNEW394UNQ196SDCGENSelector,[$BudgetFlow.$_24S__balanceUNQ196SDCGENSelector]);}),[]);
$BudgetFlow.$_24S__balanceGENSelector=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24S__balanceUNQ196SDCGENSelector;}),[]);
$BudgetFlow.$_24D__NodeTypeDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["BudgetFlow"]);});
$BudgetFlow.$_24D__NodeTypeDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["NodeType"]);});
$BudgetFlow.$_24D__NodeTypeNEW403UNQ164SDCGENDatatype=
 new _F_(function($_24D__NodeType)
         {var $_24D__NodeType2=
           new _A_($BudgetFlow.$_24D__NodeTypeNEW405UNQ165EVLSDCGENDatatype,[$_24D__NodeType]);
          return $_24D__NodeType2;});
$BudgetFlow.$_24D__NodeTypeNEW405UNQ165EVLSDCGENDatatype=
 new _F_(function($_24D__NodeType)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS74__350__0,[$_24D__NodeType]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$_24D__NodeTypeDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$BudgetFlow.$_24D__NodeTypeDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$BudgetFlow.$_24D__NodeTypeUNQ164SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24D__NodeTypeNEW403UNQ164SDCGENDatatype,[$BudgetFlow.$_24D__NodeTypeUNQ164SDCGENDatatype]);}),[]);
$BudgetFlow.$_24D__NodeTypeGENDatatype=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24D__NodeTypeUNQ164SDCGENDatatype;}),[]);
$BudgetFlow.$_24D__NodeDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["BudgetFlow"]);});
$BudgetFlow.$_24D__NodeDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Node"]);});
$BudgetFlow.$_24D__NodeNEW412UNQ350SDCGENDatatype=
 new _F_(function($_24D__Node)
         {var $_24D__Node2=
           new _A_($BudgetFlow.$_24D__NodeNEW414UNQ351EVLSDCGENDatatype,[$_24D__Node]);
          return $_24D__Node2;});
$BudgetFlow.$_24D__NodeNEW414UNQ351EVLSDCGENDatatype=
 new _F_(function($_24D__Node)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS74__350__0,[$_24D__Node]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$_24D__NodeDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$BudgetFlow.$_24D__NodeDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$BudgetFlow.$_24D__NodeUNQ350SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24D__NodeNEW412UNQ350SDCGENDatatype,[$BudgetFlow.$_24D__NodeUNQ350SDCGENDatatype]);}),[]);
$BudgetFlow.$_24D__NodeGENDatatype=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24D__NodeUNQ350SDCGENDatatype;}),[]);
$BudgetFlow.$_24D__MoneyDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["BudgetFlow"]);});
$BudgetFlow.$_24D__MoneyDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Money"]);});
$BudgetFlow.$_24D__MoneyNEW421UNQ105SDCGENDatatype=
 new _F_(function($_24D__Money)
         {var $_24D__Money2=
           new _A_($BudgetFlow.$_24D__MoneyNEW423UNQ106EVLSDCGENDatatype,[$_24D__Money]);
          return $_24D__Money2;});
$BudgetFlow.$_24D__MoneyNEW423UNQ106EVLSDCGENDatatype=
 new _F_(function($_24D__Money)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS74__350__0,[$_24D__Money]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$_24D__MoneyDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$BudgetFlow.$_24D__MoneyDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$BudgetFlow.$_24D__MoneyUNQ105SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24D__MoneyNEW421UNQ105SDCGENDatatype,[$BudgetFlow.$_24D__MoneyUNQ105SDCGENDatatype]);}),[]);
$BudgetFlow.$_24D__MoneyGENDatatype=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24D__MoneyUNQ105SDCGENDatatype;}),[]);
$BudgetFlow.$_24D__GraphDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["BudgetFlow"]);});
$BudgetFlow.$_24D__GraphDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Graph"]);});
$BudgetFlow.$_24D__GraphNEW430UNQ383SDCGENDatatype=
 new _F_(function($_24D__Graph)
         {var $_24D__Graph2=
           new _A_($BudgetFlow.$_24D__GraphNEW432UNQ384EVLSDCGENDatatype,[$_24D__Graph]);
          return $_24D__Graph2;});
$BudgetFlow.$_24D__GraphNEW432UNQ384EVLSDCGENDatatype=
 new _F_(function($_24D__Graph)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS74__350__0,[$_24D__Graph]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$_24D__GraphDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$BudgetFlow.$_24D__GraphDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$BudgetFlow.$_24D__GraphUNQ383SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24D__GraphNEW430UNQ383SDCGENDatatype,[$BudgetFlow.$_24D__GraphUNQ383SDCGENDatatype]);}),[]);
$BudgetFlow.$_24D__GraphGENDatatype=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24D__GraphUNQ383SDCGENDatatype;}),[]);
$BudgetFlow.$_24D__EdgeDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["BudgetFlow"]);});
$BudgetFlow.$_24D__EdgeDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Edge"]);});
$BudgetFlow.$_24D__EdgeNEW439UNQ335SDCGENDatatype=
 new _F_(function($_24D__Edge)
         {var $_24D__Edge2=
           new _A_($BudgetFlow.$_24D__EdgeNEW441UNQ336EVLSDCGENDatatype,[$_24D__Edge]);
          return $_24D__Edge2;});
$BudgetFlow.$_24D__EdgeNEW441UNQ336EVLSDCGENDatatype=
 new _F_(function($_24D__Edge)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS74__350__0,[$_24D__Edge]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$_24D__EdgeDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$BudgetFlow.$_24D__EdgeDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$BudgetFlow.$_24D__EdgeUNQ335SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24D__EdgeNEW439UNQ335SDCGENDatatype,[$BudgetFlow.$_24D__EdgeUNQ335SDCGENDatatype]);}),[]);
$BudgetFlow.$_24D__EdgeGENDatatype=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24D__EdgeUNQ335SDCGENDatatype;}),[]);
$BudgetFlow.$_24D__AmountDFLUHC_2eBase_2emoduleNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["BudgetFlow"]);});
$BudgetFlow.$_24D__AmountDFLUHC_2eBase_2edatatypeNameGENDatatype=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Amount"]);});
$BudgetFlow.$_24D__AmountNEW448UNQ249SDCGENDatatype=
 new _F_(function($_24D__Amount)
         {var $_24D__Amount2=
           new _A_($BudgetFlow.$_24D__AmountNEW450UNQ250EVLSDCGENDatatype,[$_24D__Amount]);
          return $_24D__Amount2;});
$BudgetFlow.$_24D__AmountNEW450UNQ250EVLSDCGENDatatype=
 new _F_(function($_24D__Amount)
         {var $Datatype__=
           _e_(new _A_($UHC.$Base.$Datatype__CLS74__350__0,[$_24D__Amount]));
          var $__5=
           {_tag_:0,_1:$BudgetFlow.$_24D__AmountDFLUHC_2eBase_2edatatypeNameGENDatatype,_2:$BudgetFlow.$_24D__AmountDFLUHC_2eBase_2emoduleNameGENDatatype};
          return $__5;});
$BudgetFlow.$_24D__AmountUNQ249SDCGENDatatype=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24D__AmountNEW448UNQ249SDCGENDatatype,[$BudgetFlow.$_24D__AmountUNQ249SDCGENDatatype]);}),[]);
$BudgetFlow.$_24D__AmountGENDatatype=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24D__AmountUNQ249SDCGENDatatype;}),[]);
$BudgetFlow.$_24C__RelativeAmountDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["RelativeAmount"]);});
$BudgetFlow.$_24C__RelativeAmountNEW456UNQ264SDCGENConstructor=
 new _F_(function($_24C__RelativeAmount)
         {var $_24C__RelativeAmount2=
           new _A_($BudgetFlow.$_24C__RelativeAmountNEW458UNQ265EVLSDCGENConstructor,[$_24C__RelativeAmount]);
          return $_24C__RelativeAmount2;});
$BudgetFlow.$_24C__RelativeAmountNEW458UNQ265EVLSDCGENConstructor=
 new _F_(function($_24C__RelativeAmount)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__RelativeAmount]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__RelativeAmountDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__RelativeAmountUNQ264SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__RelativeAmountNEW456UNQ264SDCGENConstructor,[$BudgetFlow.$_24C__RelativeAmountUNQ264SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__RelativeAmountGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__RelativeAmountUNQ264SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__NodeDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Node"]);});
$BudgetFlow.$_24C__NodeNEW464UNQ357SDCGENConstructor=
 new _F_(function($_24C__Node)
         {var $_24C__Node2=
           new _A_($BudgetFlow.$_24C__NodeNEW466UNQ358EVLSDCGENConstructor,[$_24C__Node]);
          return $_24C__Node2;});
$BudgetFlow.$_24C__NodeNEW466UNQ358EVLSDCGENConstructor=
 new _F_(function($_24C__Node)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Node]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__NodeDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__NodeUNQ357SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__NodeNEW464UNQ357SDCGENConstructor,[$BudgetFlow.$_24C__NodeUNQ357SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__NodeGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__NodeUNQ357SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__MoneyDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Money"]);});
$BudgetFlow.$_24C__MoneyNEW472UNQ112SDCGENConstructor=
 new _F_(function($_24C__Money)
         {var $_24C__Money2=
           new _A_($BudgetFlow.$_24C__MoneyNEW474UNQ113EVLSDCGENConstructor,[$_24C__Money]);
          return $_24C__Money2;});
$BudgetFlow.$_24C__MoneyNEW474UNQ113EVLSDCGENConstructor=
 new _F_(function($_24C__Money)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Money]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__MoneyDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__MoneyUNQ112SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__MoneyNEW472UNQ112SDCGENConstructor,[$BudgetFlow.$_24C__MoneyUNQ112SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__MoneyGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__MoneyUNQ112SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__IncomeDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Income"]);});
$BudgetFlow.$_24C__IncomeNEW480UNQ171SDCGENConstructor=
 new _F_(function($_24C__Income)
         {var $_24C__Income2=
           new _A_($BudgetFlow.$_24C__IncomeNEW482UNQ172EVLSDCGENConstructor,[$_24C__Income]);
          return $_24C__Income2;});
$BudgetFlow.$_24C__IncomeNEW482UNQ172EVLSDCGENConstructor=
 new _F_(function($_24C__Income)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Income]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__IncomeDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__IncomeUNQ171SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__IncomeNEW480UNQ171SDCGENConstructor,[$BudgetFlow.$_24C__IncomeUNQ171SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__IncomeGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__IncomeUNQ171SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__GraphDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Graph"]);});
$BudgetFlow.$_24C__GraphNEW488UNQ390SDCGENConstructor=
 new _F_(function($_24C__Graph)
         {var $_24C__Graph2=
           new _A_($BudgetFlow.$_24C__GraphNEW490UNQ391EVLSDCGENConstructor,[$_24C__Graph]);
          return $_24C__Graph2;});
$BudgetFlow.$_24C__GraphNEW490UNQ391EVLSDCGENConstructor=
 new _F_(function($_24C__Graph)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Graph]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__GraphDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__GraphUNQ390SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__GraphNEW488UNQ390SDCGENConstructor,[$BudgetFlow.$_24C__GraphUNQ390SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__GraphGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__GraphUNQ390SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__ExpenditureDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Expenditure"]);});
$BudgetFlow.$_24C__ExpenditureNEW496UNQ179SDCGENConstructor=
 new _F_(function($_24C__Expenditure)
         {var $_24C__Expenditure2=
           new _A_($BudgetFlow.$_24C__ExpenditureNEW498UNQ180EVLSDCGENConstructor,[$_24C__Expenditure]);
          return $_24C__Expenditure2;});
$BudgetFlow.$_24C__ExpenditureNEW498UNQ180EVLSDCGENConstructor=
 new _F_(function($_24C__Expenditure)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Expenditure]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__ExpenditureDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__ExpenditureUNQ179SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__ExpenditureNEW496UNQ179SDCGENConstructor,[$BudgetFlow.$_24C__ExpenditureUNQ179SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__ExpenditureGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__ExpenditureUNQ179SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__EdgeDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Edge"]);});
$BudgetFlow.$_24C__EdgeNEW504UNQ342SDCGENConstructor=
 new _F_(function($_24C__Edge)
         {var $_24C__Edge2=
           new _A_($BudgetFlow.$_24C__EdgeNEW506UNQ343EVLSDCGENConstructor,[$_24C__Edge]);
          return $_24C__Edge2;});
$BudgetFlow.$_24C__EdgeNEW506UNQ343EVLSDCGENConstructor=
 new _F_(function($_24C__Edge)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Edge]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__EdgeDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__EdgeUNQ342SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__EdgeNEW504UNQ342SDCGENConstructor,[$BudgetFlow.$_24C__EdgeUNQ342SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__EdgeGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__EdgeUNQ342SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__AccountDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["Account"]);});
$BudgetFlow.$_24C__AccountDFLUHC_2eBase_2econIsRecordGENConstructor=
 new _F_(function($x)
         {return $UHC.$Base.$True__;});
$BudgetFlow.$_24C__AccountNEW513UNQ187SDCGENConstructor=
 new _F_(function($_24C__Account)
         {var $_24C__Account2=
           new _A_($BudgetFlow.$_24C__AccountNEW515UNQ188EVLSDCGENConstructor,[$_24C__Account]);
          return $_24C__Account2;});
$BudgetFlow.$_24C__AccountNEW515UNQ188EVLSDCGENConstructor=
 new _F_(function($_24C__Account)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__Account]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$BudgetFlow.$_24C__AccountDFLUHC_2eBase_2econIsRecordGENConstructor,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__AccountDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__AccountUNQ187SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__AccountNEW513UNQ187SDCGENConstructor,[$BudgetFlow.$_24C__AccountUNQ187SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__AccountGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__AccountUNQ187SDCGENConstructor;}),[]);
$BudgetFlow.$_24C__AbsoluteAmountDFLUHC_2eBase_2econNameGENConstructor=
 new _F_(function($x)
         {return new _A_($UHC.$Base.$packedStringToString,["AbsoluteAmount"]);});
$BudgetFlow.$_24C__AbsoluteAmountNEW521UNQ256SDCGENConstructor=
 new _F_(function($_24C__AbsoluteAmount)
         {var $_24C__AbsoluteAmount2=
           new _A_($BudgetFlow.$_24C__AbsoluteAmountNEW523UNQ257EVLSDCGENConstructor,[$_24C__AbsoluteAmount]);
          return $_24C__AbsoluteAmount2;});
$BudgetFlow.$_24C__AbsoluteAmountNEW523UNQ257EVLSDCGENConstructor=
 new _F_(function($_24C__AbsoluteAmount)
         {var $Constructor__=
           _e_(new _A_($UHC.$Base.$Constructor__CLS74__353__0,[$_24C__AbsoluteAmount]));
          var $__7=
           {_tag_:0,_1:$Constructor__._1,_2:$Constructor__._2,_3:$Constructor__._3,_4:$BudgetFlow.$_24C__AbsoluteAmountDFLUHC_2eBase_2econNameGENConstructor};
          return $__7;});
$BudgetFlow.$_24C__AbsoluteAmountUNQ256SDCGENConstructor=
 new _A_(new _F_(function()
                 {return new _A_($BudgetFlow.$_24C__AbsoluteAmountNEW521UNQ256SDCGENConstructor,[$BudgetFlow.$_24C__AbsoluteAmountUNQ256SDCGENConstructor]);}),[]);
$BudgetFlow.$_24C__AbsoluteAmountGENConstructor=
 new _A_(new _F_(function()
                 {return $BudgetFlow.$_24C__AbsoluteAmountUNQ256SDCGENConstructor;}),[]);
