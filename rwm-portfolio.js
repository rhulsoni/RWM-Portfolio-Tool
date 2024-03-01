       class applicationData {
  constructor() {
    this.items = {};
    this.itemGroups = {};
    this.nextItemID = 1;
    this.settings = {
      StrategiesChartIsActive: false,
      AssetAssetsChartsAreActive: true,
      bgColors: {
        Viking: "rgba(166,209,1,0.8)",
        Mariner: "rgba(48,169,186,0.8)",
        Explorer: "rgba(185,71,45,0.8)",
        Pioneer: "rgba(214,212,72,0.8)",
        Voyager: "rgba(183,185,48,0.8)",
        Goaltender: "rgba(192,192,192,0.8)",
        "All Equity": "rgba(50,91,137,0.8)",
        "RTREE - Crypto Index": "rgba(200, 198, 215, 0.8)",
        "HALO - Structured Notes": "rgba(191, 172, 200, 0.8)",
        "Compound Capital Venture": "rgba(74, 64, 99, 0.8)",
        Gurtin: "rgba(120, 63, 142,0.8)"
      },
      borderColors: {
        Viking: "rgba(166,209,1,1)",
        Mariner: "rgba(48,169,186,1)",
        Explorer: "rgba(185,71,45,1)",
        Pioneer: "rgba(214,212,72,1)",
        Voyager: "rgba(183,185,48,1)",
        Goaltender: "rgba(192,192,192,1)",
        "All Equity": "rgba(50,91,137,1)",
        "RTREE - Crypto Index": "rgba(200, 198, 215, 1)",
        "HALO - Structured Notes": "rgba(191, 172, 200, 1)",
        "Compound Capital Venture": "rgba(74, 64, 99, 1)",
        Gurtin: "rgba(120, 63, 142, 1)"
      },
      assetClassPies: {
        Allocations: {
          DomesticStocks: {
            caption: "Domestic Stocks",
            color: "#003B68"
          },
          DeveloperMarketStocks: {
            caption: "Developed Market Stocks",
            color: "#E09F2B"
          },
          GlobalSmallCapValue: {
            caption: "Global Small Cap Value",
            color: "#49EDC9"
          },
          GlobalMomentum: {
            caption: "Global Momentum",
            color: "#88075F"
          },
          EmergingMarketStocks: {
            caption: "Emerging Market Stocks",
            color: "#256B33"
          },
          UltraShortTermBond: {
            caption: "Ultra-Short Term Bond",
            color: "#C75235"
          },
          ShortTermTIPS: {
            caption: "Short Term TIPS",
            color: "#432AB7"
          },
          Cash: {
            caption: "Cash",
            color: "#D5F5E3"
          },
          Crypto: {
            caption: "Crypto ",
            color: "#9DB46A"
          },
          TrendFollowing: {
            caption: "Trend Following ",
            color: "#786EB3"
          },
          StructureNotes: {
            caption: "Structure Notes",
            color: "#68C3EF"
          },
          MunicipalBonds: {
            caption: "Municipal Bonds",
            color: "#6CF042"
          },
          VentureCapital: {
            caption: "Venture Capital ",
            color: "#F4BDC2"
          }
        },
        Charts: {
          Viking: {
            id: "Viking",
            caption: "Viking",
            group: "Viking",
            allocations: {
              DomesticStocks: 9,
              DeveloperMarketStocks: 4.3,
              GlobalSmallCapValue: 4.8,
              GlobalMomentum: 4.5,
              EmergingMarketStocks: 2.6,
              UltraShortTermBond: 50.8,
              ShortTermTIPS: 23.5,
              Cash: 0.5
            }
          },
          Mariner: {
            id: "Mariner",
            caption: "Mariner",
            group: "Mariner",
            allocations: {
              DomesticStocks: 18,
              DeveloperMarketStocks: 8.5,
              GlobalSmallCapValue: 9.5,
              GlobalMomentum: 9,
              EmergingMarketStocks: 5,
              UltraShortTermBond: 33.8,
              ShortTermTIPS: 15.7,
              Cash: 0.5
            }
          },
          Explorer: {
            id: "Explorer",
            caption: "Explorer",
            group: "Explorer",
            allocations: {
              DomesticStocks: 21.6,
              DeveloperMarketStocks: 10.2,
              GlobalSmallCapValue: 11.4,
              GlobalMomentum: 10.8,
              EmergingMarketStocks: 6,
              UltraShortTermBond: 27,
              ShortTermTIPS: 12.5,
              Cash: 0.5
            }
          },
          Pioneer: {
            id: "Pioneer",
            caption: "Pioneer",
            group: "Pioneer",
            allocations: {
              DomesticStocks: 25.2,
              DeveloperMarketStocks: 11.9,
              GlobalSmallCapValue: 13.3,
              GlobalMomentum: 12.6,
              EmergingMarketStocks: 7,
              UltraShortTermBond: 20.2,
              ShortTermTIPS: 9.3,
              Cash: 0.5
            }
          },
          Voyager: {
            id: "Voyager",
            caption: "Voyager",
            group: "Voyager",
            allocations: {
              DomesticStocks: 28.8,
              DeveloperMarketStocks: 13.6,
              GlobalSmallCapValue: 15.2,
              GlobalMomentum: 14.4,
              EmergingMarketStocks: 8,
              UltraShortTermBond: 13.4,
              ShortTermTIPS: 6.1,
              Cash: 0.5
            }
          },
          AllEquity: {
            id: "AllEquity",
            caption: "All Equity",
            group: "All Equity",
            allocations: {
              DomesticStocks: 36,
              DeveloperMarketStocks: 17,
              GlobalSmallCapValue: 19,
              GlobalMomentum: 18,
              EmergingMarketStocks: 10
            }
          },
          RTREE: {
            id: "RTREE",
            caption: "RTREE",
            group: "RTREE - Crypto Index",
            allocations: {
              Crypto: 100
            }
          },
          Goaltender: {
            id: "Goaltender",
            caption: "Goaltender",
            group: "Goaltender",
            allocations: {
              TrendFollowing: 100
            }
          },
          Halo: {
            id: "Halo",
            caption: "Halo",
            group: "HALO - Structured Notes",
            allocations: {
              StructureNotes: 100
            }
          },
          Gurtin: {
            id: "Gurtin",
            caption: "Gurtin",
            group: "Gurtin",
            allocations: {
              MunicipalBonds: 100
            }
          },
          CompoundCapitalVenture: {
            id: "CompoundCapitalVenture",
            caption: "Compound Capital Venture",
            group: "Compound Capital Venture",
            allocations: {
              VentureCapital: 100
            }
          }
        }
      },
      strategies: {
        Viking: {
          id: "Viking",
          caption: "Viking",
          group: "Viking",
          allocation: {
            stocks: {
              desc: "25% Stocks",
              pct: 0.25
            },
            bonds: {
              desc: "75% Bonds",
              pct: 0.75
            }
          },
          factsheet: "template_viking"
        },
        Mariner: {
          id: "Mariner",
          caption: "Mariner",
          group: "Mariner",
          allocation: {
            stocks: {
              desc: "50% Stocks",
              pct: 0.5
            },
            bonds: {
              desc: "50% Bonds",
              pct: 0.5
            }
          },
          factsheet: "template_mariner"
        },
        Explorer: {
          id: "Explorer",
          caption: "Explorer",
          group: "Explorer",
          allocation: {
            stocks: {
              desc: "60% Stocks",
              pct: 0.6
            },
            bonds: {
              desc: "40% Bonds",
              pct: 0.4
            }
          },
          factsheet: "template_explorer"
        },
        Pioneer: {
          id: "Pioneer",
          caption: "Pioneer",
          group: "Pioneer",
          allocation: {
            stocks: {
              desc: "70% Stocks",
              pct: 0.7
            },
            bonds: {
              desc: "30% Bonds",
              pct: 0.3
            }
          },
          factsheet: "template_pioneer"
        },
        Voyager: {
          id: "Voyager",
          caption: "Voyager",
          group: "Voyager",
          allocation: {
            stocks: {
              desc: "80% Stocks",
              pct: 0.8
            },
            bonds: {
              desc: "20% Bonds",
              pct: 0.2
            }
          },
          factsheet: "template_voyager"
        },
        "All Equity": {
          id: "All Equity",
          caption: "All Equity",
          group: "All Equity",
          allocation: {
            stocks: {
              desc: "100% Stocks",
              pct: 1.0
            },
            bonds: {
              desc: "&nbsp",
              pct: 0.0
            }
          },
          factsheet: ""
        },
        "Canvas Viking": {
          id: "Canvas Viking",
          caption: "Canvas Viking",
          group: "Viking",
          allocation: {
            stocks: {
              desc: "25% Stocks",
              pct: 0.25
            },
            bonds: {
              desc: "75% Bonds",
              pct: 0.75
            }
          },
          factsheet: "template_viking"
        },
        "Canvas Mariner": {
          id: "Canvas Mariner",
          caption: "Canvas Mariner",
          group: "Mariner",
          allocation: {
            stocks: {
              desc: "50% Stocks",
              pct: 0.5
            },
            bonds: {
              desc: "50% Bonds",
              pct: 0.5
            }
          },
          factsheet: "template_mariner"
        },
        "Canvas Explorer": {
          id: "Canvas Explorer",
          caption: "Canvas Explorer",
          group: "Explorer",
          allocation: {
            stocks: {
              desc: "60% Stocks",
              pct: 0.6
            },
            bonds: {
              desc: "40% Bonds",
              pct: 0.4
            }
          },
          factsheet: "template_explorer"
        },
        "Canvas Pioneer": {
          id: "Canvas Pioneer",
          caption: "Canvas Pioneer",
          group: "Pioneer",
          allocation: {
            stocks: {
              desc: "70% Stocks",
              pct: 0.7
            },
            bonds: {
              desc: "30% Bonds",
              pct: 0.3
            }
          },
          factsheet: "template_pioneer"
        },
        "Canvas Voyager": {
          id: "Canvas Voyager",
          caption: "Canvas Voyager",
          group: "Voyager",
          allocation: {
            stocks: {
              desc: "80% Stocks",
              pct: 0.8
            },
            bonds: {
              desc: "20% Bonds",
              pct: 0.2
            }
          },
          factsheet: "template_voyager"
        },
        "Canvas All Equity": {
          id: "Canvas All Equity",
          caption: "Canvas All Equity",
          group: "All Equity",
          allocation: {
            stocks: {
              desc: "100% Stocks",
              pct: 1.0
            },
            bonds: {
              desc: "&nbsp",
              pct: 0.0
            }
          },
          factsheet: ""
        },
        "Canvas Defensive Stability Viking": {
          id: "Canvas Defensive Stability Viking",
          caption: "Canvas Defensive Stability Viking",
          group: "Viking",
          allocation: {
            stocks: {
              desc: "25% Stocks",
              pct: 0.25
            },
            bonds: {
              desc: "75% Bonds",
              pct: 0.75
            }
          },
          factsheet: "template_viking"
        },
        "Canvas Defensive Stability Mariner": {
          id: "Canvas Defensive Stability Mariner",
          caption: "Canvas Defensive Stability Mariner",
          group: "Mariner",
          allocation: {
            stocks: {
              desc: "50% Stocks",
              pct: 0.5
            },
            bonds: {
              desc: "50% Bonds",
              pct: 0.5
            }
          },
          factsheet: "template_mariner"
        },
        "Canvas Defensive Stability Explorer": {
          id: "Canvas Defensive Stability Explorer",
          caption: "Canvas Defensive Stability Explorer",
          group: "Explorer",
          allocation: {
            stocks: {
              desc: "60% Stocks",
              pct: 0.6
            },
            bonds: {
              desc: "40% Bonds",
              pct: 0.4
            }
          },
          factsheet: "template_explorer"
        },
        "Canvas Defensive Stability Pioneer": {
          id: "Canvas Defensive Stability Pioneer",
          caption: "Canvas Defensive Stability Pioneer",
          group: "Pioneer",
          allocation: {
            stocks: {
              desc: "70% Stocks",
              pct: 0.7
            },
            bonds: {
              desc: "30% Bonds",
              pct: 0.3
            }
          },
          factsheet: "template_pioneer"
        },
        "Canvas Defensive Stability Voyager": {
          id: "Canvas Defensive Stability Voyager",
          caption: "Canvas Defensive Stability Voyager",
          group: "Voyager",
          allocation: {
            stocks: {
              desc: "80% Stocks",
              pct: 0.8
            },
            bonds: {
              desc: "20% Bonds",
              pct: 0.2
            }
          },
          factsheet: "template_voyager"
        },
        "Canvas Defensive Stability All Equity": {
          id: "Canvas Defensive Stability All Equity",
          caption: "Canvas Defensive Stability All Equity",
          group: "All Equity",
          allocation: {
            stocks: {
              desc: "100% Stocks",
              pct: 1.0
            },
            bonds: {
              desc: "&nbsp",
              pct: 0.0
            }
          },
          factsheet: ""
        },
        Goaltender: {
          id: "Goaltender",
          caption: "Goaltender",
          group: "Goaltender",
          allocation: {
            tactical: {
              desc: "100% Tactical",
              pct: 1.0
            }
          },
          factsheet: "template_goaltender"
        },
        "RTREE - Crypto Index": {
          id: "RTREE - Crypto Index",
          caption: "RTREE - Crypto Index",
          group: "RTREE - Crypto Index",
          allocation: {
            tactical: {
              desc: "100% Tactical",
              pct: 1.0
            }
          },
          factsheet: ""
        },
        "HALO - Structured Notes": {
          id: "HALO - Structured Notes",
          caption: "HALO - Structured Notes",
          group: "HALO - Structured Notes",
          allocation: {
            tactical: {
              desc: "100% Tactical",
              pct: 1.0
            }
          },
          factsheet: ""
        },
        "Compound Capital Venture": {
          id: "Compound Capital Venture",
          caption: "Compound Capital Venture",
          group: "Compound Capital Venture",
          allocation: {
            tactical: {
              desc: "100% Tactical",
              pct: 1.0
            }
          },
          factsheet: ""
        },
        Gurtin: {
          id: "Gurtin",
          caption: "Gurtin",
          group: "Gurtin",
          allocation: {
            stocks: {
              desc: "&nbsp",
              pct: 0
            },
            bonds: {
              desc: "100% Bonds",
              pct: 1.0
            }
          },
          factsheet: ""
        }
      }
    };
  }

  // Add a new portfolio item.
  addPortfolioItem(strategy, amount) {
    var id = this.nextItemID;
    var group = this.getStrategyGroupData(strategy);
    this.nextItemID++;
    amount = getNumVal(amount);

    // Strategies.
    if (this.items[id] == undefined) {
      this.items[id] = {
        strategy: strategy,
        group: group,
        amount: amount
      };
    } else {
      this.items[id] = {
        strategy: strategy,
        group: group,
        amount: this.items[strategy].amount + amount
      };
    }

    // Strategy groups.
    // if(groups.indexOf(group) === -1) {
    if (this.itemGroups[group] == undefined) {
      this.itemGroups[group] = {
        amount: amount,
        color: this.settings.bgColors[group],
        borderColor: this.settings.borderColors[group],
        children: {}
      };
      this.itemGroups[group].children[id] = { id: id, amount: amount };
    } else {
      this.itemGroups[group] = {
        amount: this.itemGroups[group].amount + amount,
        color: this.settings.bgColors[group],
        borderColor: this.settings.borderColors[group],
        children: this.itemGroups[group].children
      };
      this.itemGroups[group].children[id] = { id: id, amount: amount };
    }

    return id;
  }

  // Remove a portfolio item.
  removePortfolioItem(id) {
    var item = this.items[id];

    // Main items lists.
    delete this.items[id];

    // Groups list.
    this.itemGroups[item.group].amount =
      this.itemGroups[item.group].amount - item.amount;
    delete this.itemGroups[item.group].children[id];
    if (Object.keys(this.itemGroups[item.group].children).length === 0) {
      delete this.itemGroups[item.group];
    }
  }

  // Get current strategies as a list
  getCurrentStrategies() {
    var keys = [];
    var groups = [];
    var group_amounts = [];
    var group_colors = [];
    var group_border_colors = [];

    // Single Items.
    for (var key in this.items) {
      keys.push(key);
    }

    // Groups.
    for (var key in this.itemGroups) {
      groups.push(key);
      group_amounts.push(this.itemGroups[key].amount);
      group_colors.push(this.itemGroups[key].color);
      group_border_colors.push(this.itemGroups[key].borderColor);
    }

    return { keys, groups, group_amounts, group_colors, group_border_colors };
  }

  // Get Strategies Group Data.
  getStrategyGroupData(strategy) {
    return this.settings.strategies[strategy].group;
  }

  getStrategiesOptionsList() {
    var ret = [];
    for (const property in this.settings.strategies) {
      ret.push(this.settings.strategies[property]);
    }
    return ret;
  }

  // Get current strategis as a class list aggregated
  getAssetClassAggData() {
    var keys = [];
    var labels = [];
    var amounts = [];
    var colors = [];
    var border_colors = [];
    var total_amount = 0;
    var allocations = [];
    var chartsToAgg = this.settings.assetClassPies.Charts;
    var acPies = this.settings.assetClassPies;

    // Reset current values.
    for (var key in acPies.Allocations) {
      this.settings.assetClassPies.Allocations[key].amount = 0;
      this.settings.assetClassPies.Allocations[key].total_percentage = 0;
    }

    // Get total amount
    for (var group_key in this.itemGroups) {
      total_amount += this.itemGroups[group_key].amount;
    }

    // Loop the main Strategies Group
    for (var group_key in this.itemGroups) {
      var group_amount = this.itemGroups[group_key].amount;
      // Now loop the defined charts to aggregate (and the percentages to use)
      for (var key in chartsToAgg) {
        if (chartsToAgg[key].group == group_key) {
          // Check the percentages.
          for (var alloc_key in chartsToAgg[key].allocations) {
            var alloc_coef = chartsToAgg[key].allocations[alloc_key];
            var amount = group_amount * (alloc_coef / 100);
            this.settings.assetClassPies.Allocations[
              alloc_key
            ].amount += amount;
            this.settings.assetClassPies.Allocations[
              alloc_key
            ].total_percentage = numberWithCommas(
              (this.settings.assetClassPies.Allocations[alloc_key].amount /
                total_amount) *
                100,
              1
            );
          }
        }
      }
    }
    // Pass only those Allocations with value > 0
    for (var key in acPies.Allocations) {
      if (acPies.Allocations[key].amount > 0) {
        // calculate global perc alloc
        labels.push(
          acPies.Allocations[key].caption +
            " (" +
            acPies.Allocations[key].total_percentage +
            "%)"
        );
        amounts.push(acPies.Allocations[key].amount);
        colors.push(acPies.Allocations[key].color);
        border_colors.push("#999");
      }
    }
    return { keys, labels, amounts, colors, border_colors };
  }
}

// Global data model.
const appData = new applicationData();

// Initialize Strategy Select Options.
initStrategyOptions();

// Global chart objects.
const StockBondsChart = createChart(
  document.getElementById("StockBondsChart"),
  ["Stocks", "Bonds", "Tactical"],
  [0, 0, 0]
);
const StrategiesChart = createChart(
  document.getElementById("StrategiesChart"),
  ["Vik", "Pio"],
  [],
  "Strategies"
);
const AssetsChart = createChart(
  document.getElementById("AssetsChart"),
  [],
  [],
  "Assets Breakdown"
);

$(document).ready(function () {
  // Client Name events.
  $("#client-name").on("focusout", function (e) {
    updateTitle();
  });

  $("#client-name").on("keypress", function (e) {
    if (e.keyCode == "13") {
      e.preventDefault();
      updateTitle();
    }
  });

  // Add a row events.
  $(".add-row").click(function () {
    addRow();
  });

  $("#account-value").on("keypress", function (e) {
    if (e.keyCode == "13") {
      e.preventDefault();
      addRow();
    }
  });

  // Remove a row.
  $(".delete-row").click(function () {
    removeRow();
  });

  // Remove all the rows
  $(".delete-all").click(function () {
    removeRow(true);
  });

  // Remove all the rows
  $("#print").click(function () {
    printPortfolio();
  });

  // Initially hide the chart
  $("#StockBondsChart").hide();
  $("#StrategiesChartWrapper").hide();
  $("#AssetsChartWrapper").hide();
  // $('.asset-class-chart').hide();
});

// MAIN FUNCTIONS.

// Initialize Strategy options.
function initStrategyOptions() {
  var options = appData.getStrategiesOptionsList();
  options.forEach(function (option) {
    $("#strategy").append(
      '<option value="' + option.id + '">' + option.caption + "</option>"
    );
  });
}

// Update title.
function updateTitle() {
  var clientName = $("#client-name").val();
  $("#site-title h1").text("Proposed Investment Portfolio for " + clientName);
}

// Add a row.
function addRow() {
  var accName = $("#account-name").val();
  var strategy = $("#strategy").val();
  var accVal = $("#account-value").val();

  if (isNumeric(accVal)) {
    // Get Strategy Parameters.
    var strategyParams = appData.settings.strategies[strategy];

    // Get Allocation values.
    var al = strategyParams.allocation;

    var alStocks = 0,
      alBonds = 0,
      alTactical = 0;
    if (al.stocks !== undefined) {
      alStocks = al.stocks.pct * accVal;
    }
    if (al.bonds !== undefined) {
      alBonds = al.bonds.pct * accVal;
    }
    if (al.tactical !== undefined) {
      alTactical = al.tactical.pct * accVal;
    }

    // Update the appData
    var newItemID = appData.addPortfolioItem(strategy, accVal);

    // Update the markup.
    var markupAlloc;
    if (strategyParams.group == "All Equity") {
      markupAlloc =
        "<div class='allocation-stocks' data-val=\"" +
        alStocks +
        '" >' +
        al.stocks.desc +
        " ($" +
        numberWithCommas(alStocks) +
        ")</div>";
    } else if (strategyParams.group == "Gurtin") {
      markupAlloc =
        "<div class='allocation-bonds' data-val=\"" +
        alBonds +
        '" >' +
        al.bonds.desc +
        " ($" +
        numberWithCommas(alBonds) +
        ")</div>";
    } else if (alTactical > 0) {
      markupAlloc =
        "<div class='allocation-tactical' data-val=\"" +
        alTactical +
        '" >' +
        al.tactical.desc +
        " ($" +
        numberWithCommas(alTactical) +
        ")</div>";
    } else {
      markupAlloc =
        "<div class='allocation-stocks' data-val=\"" +
        alStocks +
        '" >' +
        al.stocks.desc +
        " ($" +
        numberWithCommas(alStocks) +
        ")</div>" +
        "<div class='allocation-bonds' data-val=\"" +
        alBonds +
        '" >' +
        al.bonds.desc +
        " ($" +
        numberWithCommas(alBonds) +
        ")</div>";
    }

    var markup =
      "<tr id='" +
      newItemID +
      "''><td class='select-row'><input type='checkbox' name='record'></td><td class='account-type'>" +
      accName +
      "</td><td class='strategy'>" +
      strategy +
      "</td><td class='account-value'>$<span>" +
      numberWithCommas(accVal) +
      "</span></td>" +
      "<td class='allocation'>" +
      markupAlloc +
      "</td>" +
      "<td class='portfolio-pct'></td></tr>";
    $("table tbody").append(markup);

    // Calculate values.
    calculate();

    // Reset input and set focus.
    $("#account-value").val("");
    $("#account-value").focus();
  }
}

// Remove a row (or all of them).
function removeRow(removeAll) {
  $("table tbody")
    .find('input[name="record"]')
    .each(function () {
      var id = $(this).parents("tr").attr("id");
      if (!removeAll) {
        if ($(this).is(":checked")) {
          $(this).parents("tr").remove();
          appData.removePortfolioItem(id);
        }
      } else {
        $(this).parents("tr").remove();
        appData.removePortfolioItem(id);
      }
    });

  // Recalculate values.
  calculate();
}

// Calculate the values.
function calculate() {
  // Get the total sum.
  var sum = 0;
  $("td.account-value span").each(function () {
    var value = getNumVal($(this).text());
    if (!isNaN(value) && value.length != 0) {
      sum += parseFloat(value);
    }
  });

  // Set the portfolio percentages for each row.
  $("td.portfolio-pct").each(function () {
    var acctVal = getNumVal(
      $(this).closest("tr").children("td.account-value").find("span").text()
    );
    $(this).text(((acctVal / sum) * 100).toFixed(1) + "%");
  });

  // Get the total allocations.
  var sumStocks = 0;
  var sumBonds = 0;
  var sumTactical = 0;
  $(".allocation-stocks").each(function () {
    sumStocks += getNumVal($(this).attr("data-val"));
  });
  $(".allocation-bonds").each(function () {
    sumBonds += getNumVal($(this).attr("data-val"));
  });
  $(".allocation-tactical").each(function () {
    sumTactical += getNumVal($(this).attr("data-val"));
  });

  var pctStocks = ((sumStocks / sum) * 100).toFixed(1) + "%";
  var pctBonds = ((sumBonds / sum) * 100).toFixed(1) + "%";
  var pctTactical = ((sumTactical / sum) * 100).toFixed(1) + "%";

  // Set the summary values.
  if (sum != 0) {
    $(".total-account-value").text("$" + numberWithCommas(sum));

    var alloc = "";
    if (sumStocks) {
      alloc +=
        "<div>" +
        pctStocks +
        " Stocks ($" +
        numberWithCommas(sumStocks) +
        ")</div>";
    }
    if (sumBonds) {
      alloc +=
        "<div>" +
        pctBonds +
        " Bonds ($" +
        numberWithCommas(sumBonds) +
        ")</div>";
    }
    if (sumTactical) {
      alloc +=
        "<div>" +
        pctTactical +
        " Tactical ($" +
        numberWithCommas(sumTactical) +
        ")</div>";
    }
    $(".total-allocation").html(alloc);
    $(".total-portfolio-pct").text("100.0%");
  } else {
    $(".total-account-value").text("");
    $(".total-allocation").text("");
    $(".total-portfolio-pct").text("");
  }

  // Stocks / Bonds / Goaltender chart.
  updateChart(StockBondsChart, [sumStocks, sumBonds, sumTactical]);
  updateChart(
    StockBondsChart,
    [sumStocks, sumBonds, sumTactical],
    [
      "Stocks (" + pctStocks + ")",
      "Bonds (" + pctBonds + ")",
      "Tactical (" + pctTactical + ")"
    ]
  );

  // Strategies chart.
  var strategies = appData.getCurrentStrategies();
  updateChart(
    StrategiesChart,
    strategies.group_amounts,
    strategies.groups,
    strategies.group_colors,
    strategies.group_border_colors
  );

  // Assets Breakdown.
  if (appData.settings.AssetAssetsChartsAreActive) {
    var data = appData.getAssetClassAggData();
    updateChart(
      AssetsChart,
      data.amounts,
      data.labels,
      data.colors,
      data.border_colors
    );
  }

  // Charts: Show hide / logic.
  if (sum > 0) {
    $("#StockBondsChart").show();
    if (appData.settings.StrategiesChartIsActive) {
      $("#StrategiesChartWrapper").show();
    }
    if (appData.settings.AssetAssetsChartsAreActive) {
      $("#AssetsChartWrapper").show();
    }
  } else {
    $("#StockBondsChart").hide();
    $("#StrategiesChartWrapper").hide();
    $("#AssetsChartWrapper").hide();
  }

  // Print - Strategy pages
  // Reset printing visibility.
  $(".additional-page").removeClass("visible");
  // Update printing visibility.

  strategies.groups.forEach(function (el) {
    $("#page-" + el.replace(/\s+/g, "-")).addClass("visible");
  });
}

// CHART FUNCTIONS
function createChart(ctx, labels, values, title) {
  if (title == undefined) {
    title = "Portfolio Allocation";
  }
  return new Chart(ctx, {
    // plugins: [ChartDataLabels],
    type: "pie",
    data: {
      labels: labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "rgba(54, 162, 235, 0.5)",
            "rgba(75, 192, 192, 0.5)",
            "rgba(255, 204, 102, 0.5)"
          ],
          borderColor: [
            "rgba(54, 162, 235, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(255, 153, 51, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || "";
              if (label) {
                label += ": ";
              }
              label += "$" + numberWithCommas(context.raw) || "";
              return label;
            }
          }
        }
      }
    }
  });
}

// Update chart data.
function updateChart(chart, data, labels, colors, border_colors) {
  chart.data.datasets[0].data = data;
  if (labels !== undefined) {
    chart.data.labels = labels;
  }
  if (colors !== undefined) {
    chart.data.datasets[0].backgroundColor = colors;
  }
  if (border_colors !== undefined) {
    chart.data.datasets[0].borderColor = border_colors;
  }
  chart.update();
}

// PRINT
function printPortfolio() {
  window.print();
}

// HELPER FUNCTIONS

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function getNumVal(num) {
  if (typeof num === "string" || num instanceof String) {
    num = parseFloat(num.replace(/,/g, ""));
  }
  if (!isNaN(num)) {
    return num;
  } else {
    return 0;
  }
}

// function formatNum(str) {
//     $("td.account-value span").each(function () {
//     var num = $(this).text();
//     var commaNum = numberWithCommas(num);
//     $(this).text(commaNum);
//   });
// }

function numberWithCommas(number, numDigits) {
  if (numDigits == undefined) {
    numDigits = 0;
  }
  var val = (Math.round(number * 100) / 100).toFixed(numDigits);
  var parts = val.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
