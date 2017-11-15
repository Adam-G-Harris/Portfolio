/*function svgNameAnimation() {
	anime({
		targets: '#svgContainer .lines path',
		strokeDashoffset: [anime.setDashoffset, 0],
		easing: 'easeInOutSine',
		duration: 500,
		delay: function (el, i) {
			return i * 250;
		},
		complete: function () {
			dotI();
		}
	});
}*/

/*function dotI() {
	anime({
		targets: '.nameI',
		translateX: -10,
		duration: 1000,
		elasticity: 300,
	});
}*/

//svgNameAnimation();

//youre gonna use while indexOf('M') !== -1
//Then something else

let strToSplit = 'M725.38,509.04 L730.14,509.04 L751,558.6L745.82,558.6 L740.43,545.44 L714.18,545.44 L708.58,558.6 L703.75,558.6 L725.38,509.04 Z M727.55,514.08 L716,541.24 L738.75,541.24 L727.55,514.08 Z'; /* M785.23,552.93 L785.09,552.93 C784.436663,554.050006 783.620005,555.018329 782.64,555.835 C781.659995,556.651671 780.598339,557.328331 779.455,557.865 C778.311661,558.401669 777.110006,558.798332 775.85,559.055 C774.589994,559.311668 773.353339,559.44 772.14,559.44 C769.666654,559.44 767.380011,559.020004 765.28,558.18 C763.17999,557.339996 761.383341,556.161674 759.89,554.645 C758.396659,553.128326 757.230004,551.331677 756.39,549.255 C755.549996,547.178323 755.13,544.903346 755.13,542.43 C755.13,539.956654 755.549996,537.681677 756.39,535.605 C757.230004,533.528323 758.396659,531.731674 759.89,530.215 C761.383341,528.698326 763.17999,527.520004 765.28,526.68 C767.380011,525.839996 769.666654,525.42 772.14,525.42 C773.353339,525.42 774.589994,525.548332 775.85,525.805 C777.110006,526.061668 778.311661,526.458331 779.455,526.995 C780.598339,527.531669 781.659995,528.208329 782.64,529.025 C783.620005,529.841671 784.436663,530.809994 785.09,531.93 L785.23,531.93 L785.23,505.68 L789.43,505.68 L789.43,558.6 L785.23,558.6 L785.23,552.93 Z M785.65,542.43 C785.65,540.609991 785.300004,538.895008 784.6,537.285 C783.899997,535.674992 782.943339,534.275006 781.73,533.085 C780.516661,531.894994 779.093342,530.950003 777.46,530.25 C775.826659,529.549997 774.053343,529.2 772.14,529.2 C770.17999,529.2 768.406675,529.549997 766.82,530.25 C765.233325,530.950003 763.880006,531.894994 762.76,533.085 C761.639994,534.275006 760.788336,535.674992 760.205,537.285 C759.621664,538.895008 759.33,540.609991 759.33,542.43 C759.33,544.250009 759.621664,545.964992 760.205,547.575 C760.788336,549.185008 761.639994,550.584994 762.76,551.775 C763.880006,552.965006 765.233325,553.909997 766.82,554.61 C768.406675,555.310003 770.17999,555.66 772.14,555.66 C774.053343,555.66 775.826659,555.310003 777.46,554.61 C779.093342,553.909997 780.516661,552.965006 781.73,551.775 C782.943339,550.584994 783.899997,549.185008 784.6,547.575 C785.300004,545.964992 785.65,544.250009 785.65,542.43 Z M824.85,545.02 C824.85,546.606675 824.861667,548.029994 824.885,549.29 C824.908333,550.550006 824.943333,551.716661 824.99,552.79 C825.036667,553.863339 825.095,554.866662 825.165,555.8 C825.235,556.733338 825.339999,557.666662 825.48,558.6 L821.56,558.6 C821.279999,557.013325 821.14,555.263343 821.14,553.35 L821,553.35 C819.786661,555.45001 818.281676,556.989995 816.485,557.97 C814.688324,558.950005 812.413347,559.44 809.66,559.44 C808.259993,559.44 806.88334,559.265002 805.53,558.915 C804.17666,558.564998 802.963339,558.005004 801.89,557.235 C800.816661,556.464996 799.94167,555.473339 799.265,554.26 C798.58833,553.046661 798.25,551.576675 798.25,549.85 C798.25,547.376654 798.879994,545.416674 800.14,543.97 C801.400006,542.523326 802.951657,541.438337 804.795,540.715 C806.638343,539.991663 808.598323,539.525001 810.675,539.315 C812.751677,539.104999 814.583325,539 816.17,539 L821.07,539 L821.07,537.04 C821.07,534.239986 820.206675,532.233339 818.48,531.02 C816.753325,529.806661 814.583346,529.2 811.97,529.2 C808.236648,529.2 804.946681,530.413321 802.1,532.84 L799.65,529.97 C801.190008,528.476659 803.103322,527.345004 805.39,526.575 C807.676678,525.804996 809.869989,525.42 811.97,525.42 C815.89002,525.42 819.016655,526.341657 821.35,528.185 C823.683345,530.028343 824.85,533.003313 824.85,537.11 L824.85,545.02 Z M816.45,542.36 C814.676658,542.36 812.961675,542.476666 811.305,542.71 C809.648325,542.943334 808.155007,543.339997 806.825,543.9 C805.494993,544.460003 804.433337,545.206662 803.64,546.14 C802.846663,547.073338 802.45,548.239993 802.45,549.64 C802.45,550.620005 802.671664,551.494996 803.115,552.265 C803.558336,553.035004 804.129997,553.664998 804.83,554.155 C805.530004,554.645002 806.311662,555.018332 807.175,555.275 C808.038338,555.531668 808.913329,555.66 809.8,555.66 C812.040011,555.66 813.883326,555.333337 815.33,554.68 C816.776674,554.026663 817.931662,553.175005 818.795,552.125 C819.658338,551.074995 820.253332,549.885007 820.58,548.555 C820.906668,547.224993 821.07,545.88334 821.07,544.53 L821.07,542.36 L816.45,542.36 Z M836.05,535.36 C836.05,534.75333 836.026667,534.018338 835.98,533.155 C835.933333,532.291662 835.898333,531.416671 835.875,530.53 C835.851667,529.643329 835.816667,528.815004 835.77,528.045 C835.723333,527.274996 835.7,526.680002 835.7,526.26 L839.9,526.26 C839.946667,527.473339 839.981667,528.639994 840.005,529.76 C840.028333,530.880006 840.086666,531.603332 840.18,531.93 L840.39,531.93 C841.230004,530.156658 842.62999,528.62834 844.59,527.345 C846.55001,526.06166 848.836654,525.42 851.45,525.42 C853.596677,525.42 855.556658,525.968328 857.33,527.065 C859.103342,528.161672 860.386663,529.946654 861.18,532.42 C862.206672,529.993321 863.73499,528.220006 865.765,527.1 C867.79501,525.979994 869.929989,525.42 872.17,525.42 C874.690013,525.42 876.743325,525.816663 878.33,526.61 C879.916675,527.403337 881.164995,528.44166 882.075,529.725 C882.985005,531.00834 883.614998,532.489992 883.965,534.17 C884.315002,535.850008 884.49,537.576658 884.49,539.35 L884.49,558.6 L880.29,558.6 L880.29,539.56 C880.29,538.253327 880.173335,536.981673 879.94,535.745 C879.706666,534.508327 879.298336,533.400005 878.715,532.42 C878.131664,531.439995 877.315005,530.658336 876.265,530.075 C875.214995,529.491664 873.850008,529.2 872.17,529.2 C870.20999,529.2 868.600006,529.561663 867.34,530.285 C866.079994,531.008337 865.088337,531.929994 864.365,533.05 C863.641663,534.170006 863.128335,535.383327 862.825,536.69 C862.521665,537.996673 862.37,539.233327 862.37,540.4 L862.37,558.6 L858.17,558.6 L858.17,539.14 C858.17,536.153318 857.621672,533.750009 856.525,531.93 C855.428328,530.109991 853.736678,529.2 851.45,529.2 C849.909992,529.2 848.451674,529.468331 847.075,530.005 C845.698326,530.541669 844.508338,531.358328 843.505,532.455 C842.501662,533.551672 841.708336,534.928325 841.125,536.585 C840.541664,538.241675 840.25,540.189989 840.25,542.43 L840.25,558.6 L836.05,558.6 L836.05,535.36 Z M915.08,509.04 L919.7,509.04 L919.7,530.88 L947.42,530.88 L947.42,509.04 L952.04,509.04 L952.04,558.6 L947.42,558.6 L947.42,535.08 L919.7,535.08 L919.7,558.6 L915.08,558.6 L915.08,509.04 Z M989.56,545.02 C989.56,546.606675 989.571667,548.029994 989.595,549.29 C989.618333,550.550006 989.653333,551.716661 989.7,552.79 C989.746667,553.863339 989.805,554.866662 989.875,555.8 C989.945,556.733338 990.049999,557.666662 990.19,558.6 L986.27,558.6 C985.989999,557.013325 985.85,555.263343 985.85,553.35 L985.71,553.35 C984.496661,555.45001 982.991676,556.989995 981.195,557.97 C979.398324,558.950005 977.123347,559.44 974.37,559.44 C972.969993,559.44 971.59334,559.265002 970.24,558.915 C968.88666,558.564998 967.673339,558.005004 966.6,557.235 C965.526661,556.464996 964.65167,555.473339 963.975,554.26 C963.29833,553.046661 962.96,551.576675 962.96,549.85 C962.96,547.376654 963.589994,545.416674 964.85,543.97 C966.110006,542.523326 967.661657,541.438337 969.505,540.715 C971.348343,539.991663 973.308323,539.525001 975.385,539.315 C977.461677,539.104999 979.293325,539 980.88,539 L985.78,539 L985.78,537.04 C985.78,534.239986 984.916675,532.233339 983.19,531.02 C981.463325,529.806661 979.293346,529.2 976.68,529.2 C972.946648,529.2 969.656681,530.413321 966.81,532.84 L964.36,529.97 C965.900008,528.476659 967.813322,527.345004 970.1,526.575 C972.386678,525.804996 974.57999,525.42 976.68,525.42 C980.60002,525.42 983.726655,526.341657 986.06,528.185 C988.393345,530.028343 989.56,533.003313 989.56,537.11 L989.56,545.02 Z M981.16,542.36 C979.386658,542.36 977.671675,542.476666 976.015,542.71 C974.358325,542.943334 972.865007,543.339997 971.535,543.9 C970.204993,544.460003 969.143337,545.206662 968.35,546.14 C967.556663,547.073338 967.16,548.239993 967.16,549.64 C967.16,550.620005 967.381664,551.494996 967.825,552.265 C968.268336,553.035004 968.839997,553.664998 969.54,554.155 C970.240004,554.645002 971.021662,555.018332 971.885,555.275 C972.748338,555.531668 973.623329,555.66 974.51,555.66 C976.750011,555.66 978.593326,555.333337 980.04,554.68 C981.486674,554.026663 982.641662,553.175005 983.505,552.125 C984.368338,551.074995 984.963332,549.885007 985.29,548.555 C985.616668,547.224993 985.78,545.88334 985.78,544.53 L985.78,542.36 L981.16,542.36 Z M1000.76,535.36 C1000.76,534.75333 1000.73667,534.018338 1000.69,533.155 C1000.64333,532.291662 1000.60833,531.416671 1000.585,530.53 C1000.56167,529.643329 1000.52667,528.815004 1000.48,528.045 C1000.43333,527.274996 1000.41,526.680002 1000.41,526.26 L1004.61,526.26 C1004.65667,527.473339 1004.69167,528.639994 1004.715,529.76 C1004.73833,530.880006 1004.79667,531.603332 1004.89,531.93 C1005.96334,530.016657 1007.33999,528.453339 1009.02,527.24 C1010.70001,526.026661 1012.75332,525.42 1015.18,525.42 C1015.6,525.42 1016.00833,525.455 1016.405,525.525 C1016.80167,525.595 1017.21,525.676666 1017.63,525.77 L1017.14,529.9 C1016.58,529.713332 1016.04334,529.62 1015.53,529.62 C1013.70999,529.62 1012.13501,529.911664 1010.805,530.495 C1009.47499,531.078336 1008.37834,531.883328 1007.515,532.91 C1006.65166,533.936672 1006.01,535.138326 1005.59,536.515 C1005.17,537.891674 1004.96,539.373325 1004.96,540.96 L1004.96,558.6 L1000.76,558.6 L1000.76,535.36 Z M1024.07,535.36 C1024.07,534.75333 1024.04667,534.018338 1024,533.155 C1023.95333,532.291662 1023.91833,531.416671 1023.895,530.53 C1023.87167,529.643329 1023.83667,528.815004 1023.79,528.045 C1023.74333,527.274996 1023.72,526.680002 1023.72,526.26 L1027.92,526.26 C1027.96667,527.473339 1028.00167,528.639994 1028.025,529.76 C1028.04833,530.880006 1028.10667,531.603332 1028.2,531.93 C1029.27334,530.016657 1030.64999,528.453339 1032.33,527.24 C1034.01001,526.026661 1036.06332,525.42 1038.49,525.42 C1038.91,525.42 1039.31833,525.455 1039.715,525.525 C1040.11167,525.595 1040.52,525.676666 1040.94,525.77 L1040.45,529.9 C1039.89,529.713332 1039.35334,529.62 1038.84,529.62 C1037.01999,529.62 1035.44501,529.911664 1034.115,530.495 C1032.78499,531.078336 1031.68834,531.883328 1030.825,532.91 C1029.96166,533.936672 1029.32,535.138326 1028.9,536.515 C1028.48,537.891674 1028.27,539.373325 1028.27,540.96 L1028.27,558.6 L1024.07,558.6 L1024.07,535.36 Z M1048.08,526.26 L1052.28,526.26 L1052.28,558.6 L1048.08,558.6 L1048.08,526.26 Z M1047.03,513.45 C1047.03,512.563329 1047.33333,511.81667 1047.94,511.21 C1048.54667,510.60333 1049.29333,510.3 1050.18,510.3 C1051.06667,510.3 1051.81333,510.60333 1052.42,511.21 C1053.02667,511.81667 1053.33,512.563329 1053.33,513.45 C1053.33,514.336671 1053.02667,515.08333 1052.42,515.69 C1051.81333,516.29667 1051.06667,516.6 1050.18,516.6 C1049.29333,516.6 1048.54667,516.29667 1047.94,515.69 C1047.33333,515.08333 1047.03,514.336671 1047.03,513.45 Z M1064.25,550.34 C1065.13667,552.066675 1066.44332,553.384995 1068.17,554.295 C1069.89668,555.205005 1071.71666,555.66 1073.63,555.66 C1074.51667,555.66 1075.40333,555.520001 1076.29,555.24 C1077.17667,554.959999 1077.97,554.563336 1078.67,554.05 C1079.37,553.536664 1079.94166,552.918337 1080.385,552.195 C1080.82834,551.471663 1081.05,550.643338 1081.05,549.71 C1081.05,548.216659 1080.57167,547.09667 1079.615,546.35 C1078.65833,545.60333 1077.48001,545.020002 1076.08,544.6 C1074.67999,544.179998 1073.14001,543.818335 1071.46,543.515 C1069.77999,543.211665 1068.24001,542.745003 1066.84,542.115 C1065.43999,541.484997 1064.26167,540.610006 1063.305,539.49 C1062.34833,538.369994 1061.87,536.783344 1061.87,534.73 C1061.87,533.143325 1062.19666,531.766673 1062.85,530.6 C1063.50334,529.433328 1064.35499,528.465004 1065.405,527.695 C1066.45501,526.924996 1067.63333,526.353335 1068.94,525.98 C1070.24667,525.606665 1071.57666,525.42 1072.93,525.42 C1075.59001,525.42 1077.88832,525.909995 1079.825,526.89 C1081.76168,527.870005 1083.26666,529.40999 1084.34,531.51 L1080.56,533.75 C1079.76666,532.256659 1078.77501,531.125004 1077.585,530.355 C1076.39499,529.584996 1074.84334,529.2 1072.93,529.2 C1072.18333,529.2 1071.40167,529.316665 1070.585,529.55 C1069.76833,529.783335 1069.03334,530.109998 1068.38,530.53 C1067.72666,530.950002 1067.17834,531.486663 1066.735,532.14 C1066.29166,532.793337 1066.07,533.539996 1066.07,534.38 C1066.07,535.826674 1066.54833,536.899997 1067.505,537.6 C1068.46167,538.300004 1069.63999,538.848331 1071.04,539.245 C1072.44001,539.641669 1073.97999,539.979999 1075.66,540.26 C1077.34001,540.540001 1078.87999,540.994997 1080.28,541.625 C1081.68001,542.255003 1082.85833,543.164994 1083.815,544.355 C1084.77167,545.545006 1085.25,547.236656 1085.25,549.43 C1085.25,551.110008 1084.935,552.568327 1084.305,553.805 C1083.675,555.041673 1082.81167,556.079996 1081.715,556.92 C1080.61833,557.760004 1079.37001,558.389998 1077.97,558.81 C1076.56999,559.230002 1075.10001,559.44 1073.56,559.44 C1070.75999,559.44 1068.20501,558.903339 1065.895,557.83 C1063.58499,556.756661 1061.80001,555.100011 1060.54,552.86 L1064.25,550.34 Z M1094.14,555.66 C1094.14,554.726662 1094.46666,553.933337 1095.12,553.28 C1095.77334,552.626663 1096.56666,552.3 1097.5,552.3 C1098.43334,552.3 1099.22666,552.626663 1099.88,553.28 C1100.53334,553.933337 1100.86,554.726662 1100.86,555.66 C1100.86,556.593338 1100.53334,557.386663 1099.88,558.04 C1099.22666,558.693337 1098.43334,559.02 1097.5,559.02 C1096.56666,559.02 1095.77334,558.693337 1095.12,558.04 C1094.46666,557.386663 1094.14,556.593338 1094.14,555.66 Z';*/

function sorter(strSVG) {
	let splitStrSVG = strSVG.split('M');
	console.log(splitStrSVG);
}

sorter(strToSplit);