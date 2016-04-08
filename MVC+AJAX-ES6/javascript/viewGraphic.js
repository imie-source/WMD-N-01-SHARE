"use strict";

fr.imie.View = class extends fr.imie.Observable {
  constructor(model) {
    super();
    this.model = model || {};
    this.model.attach(this);
    $(function() {
      //console.log("jqueryReady")
      $('#buttonharvest1').on('click', function() {
        this.notify('harvest', 0);
      }.bind(this));
      $('#buttonharvest2').on('click', function() {
        this.notify('harvest', 1);
      }.bind(this));
      $('#buttonharvest3').on('click', function() {
        this.notify('harvest', 2);
      }.bind(this));

      $('#buttonwater1').on('click', function() {
        this.notify('water', 0);
      }.bind(this));
      $('#buttonwater2').on('click', function() {
        this.notify('water', 1);
      }.bind(this));
      $('#buttonwater3').on('click', function() {
        this.notify('water', 2);
      }.bind(this));

      $('#goButton').on('click', function() {
        this.notify('go');
      }.bind(this));

      $('#buttonBuy').on('click', function() {
        this.notify('buyWater', parseInt($('#inputBuy').val()));
      }.bind(this));

      $('#playerName').on('change', function() {
        this.model.playerName = $('#playerName').val();
      }.bind(this));

      $('#scoreButton').on('click', function() {
        this.notify('displayScore');
      }.bind(this))

      $('#gameButton').on('click', function() {
        this.notify('displayGame');
      }.bind(this))

      $("#scoreContainer").hide();

      //this.model.refreshScore();
      this.display();
    }.bind(this));
  }
  showScore() {
    $("#mainContainer").hide();
    $("#scoreContainer").show();
  }
  showGame() {
    $("#scoreContainer").hide();
    $("#mainContainer").show();
  }
  update() {
    console.log("update vueJeux");
    this.display();
  }
  display() {
    $('#labelHarvest').text(this.model.totalHarvest);
    $('#labelTank').text(this.model.totalTanck);
    $('#labelCash').text(this.model.totalCash);
    $('#labelTanck1').text(this.model.fields[0].tanck);
    $('#labelTanck2').text(this.model.fields[1].tanck);
    $('#labelTanck3').text(this.model.fields[2].tanck);

    $('#fieldState1').data("val", Math.round(this.model.fields[0].maturity / 20 * 100));
    $('#fieldState2').data("val", Math.round(this.model.fields[1].maturity / 20 * 100));
    $('#fieldState3').data("val", Math.round(this.model.fields[2].maturity / 20 * 100));
    $('.pp').progressPie({
      mode: $.fn.progressPie.Mode.COLOR,
      valueData: "val",
      size: 50,
      strokeWidth: 5,
      update: true
    });

    if (this.model.fields[0].maturity > 20) {
      $('#buttonharvest1').addClass('ready').removeClass('notReady').prop('disabled', false);
    } else {
      $('#buttonharvest1').addClass('notReady').removeClass('ready').prop('disabled', true);
    }

    if (this.model.fields[1].maturity > 20) {
      $('#buttonharvest2').addClass('ready').removeClass('notReady').prop('disabled', false);
    } else {
      $('#buttonharvest2').addClass('notReady').removeClass('ready').prop('disabled', true);
    }

    if (this.model.fields[2].maturity > 20) {
      $('#buttonharvest3').addClass('ready').removeClass('notReady').prop('disabled', false);
    } else {
      $('#buttonharvest3').addClass('notReady').removeClass('ready').prop('disabled', true);
    }

    $('#scoreTable').empty();
    for (var data of this.model.scores) {
      $('#scoreTable').append(
        $('<div>').addClass('displayRow').append(
          $('<div>').addClass('displayCell').text(data.player)
        ).append(
          $('<div>').addClass('displayCell').text(data.score)
        ));
    }
  }
}
