// clicker code:
    var clickerButton = document.getElementById("clickerButton");

    var upgrade1Count = 0
    var upgrade2Count = 0
    var upgrade3Count = 0
    var upgrade4Count = 0
    var upgrade5Count = 0
    var upgrade6Count = 0
    var upgrade7Count = 0
    var upgrade8Count = 0
    var upgrade9Count = 0
    var upgrade10Count = 0
    
    var upgrade1Price = 15
    var upgrade2Price = 100
    var upgrade3Price = 1100
    var upgrade4Price = 12000
    var upgrade5Price = 130000
    var upgrade6Price = 1400000
    var upgrade7Price = 20000000
    var upgrade8Price = 330000000
    var upgrade9Price = 5100000000
    var upgrade10Price = 75000000000

    var PPC = 1;
    var points = 0; 

    function clicker() {
        points += PPC;

        update()
    }

// upgrade buy:
    function upgradeBuy(upgradeID) {
        if (upgradeID === "U1") {
            if (points >= upgrade1Price) {
                points -= upgrade1Price;
                upgrade1Price = 15 * (1.15**(upgrade1Count+1));
                upgrade1Price = upgrade1Price.toFixed(1);
                upgrade1Count ++;
                PPC ++;
                console.log(upgrade1Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U2") {
            if (points >= upgrade2Price) {
                points -= upgrade2Price;
                upgrade2Price = 100 * (1.15**(upgrade2Count+1));
                upgrade2Price = upgrade2Price.toFixed(1);
                upgrade2Count ++;
                PPC += 5;
                console.log(upgrade2Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U3") {
            if (points >= upgrade3Price) {
                points -= upgrade3Price;
                upgrade3Price = 1100 * (1.15**(upgrade3Count+1));
                upgrade3Price = upgrade3Price.toFixed(1);
                upgrade3Count ++;
                PPC += 15;
                console.log(upgrade3Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U4") {
            if (points >= upgrade4Price) {
                points -= upgrade4Price;
                upgrade4Price = 12000 * (1.15**(upgrade4Count+1));
                upgrade4Price = upgrade4Price.toFixed(1);
                upgrade4Count ++;
                PPC += 35;
                console.log(upgrade4Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U5") {
            if (points >= upgrade5Price) {
                points -= upgrade5Price;
                upgrade5Price = 130000 * (1.15**(upgrade5Count+1));
                upgrade5Price = upgrade5Price.toFixed(1);
                upgrade5Count ++;
                PPC += 70;
                console.log(upgrade5Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U6") {
            if (points >= upgrade6Price) {
                points -= upgrade6Price;
                upgrade6Price = 1400000 * (1.15**(upgrade6Count+1));
                upgrade6Price = upgrade6Price.toFixed(1);
                upgrade6Count ++;
                PPC += 250;
                console.log(upgrade6Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U7") {
            if (points >= upgrade7Price) {
                points -= upgrade7Price;
                upgrade7Price = 20000000 * (1.15**(upgrade7Count+1));
                upgrade7Price = upgrade7Price.toFixed(1);
                upgrade7Count ++;
                PPC += 600;
                console.log(upgrade7Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U8") {
            if (points >= upgrade8Price) {
                points -= upgrade8Price;
                upgrade8Price = 330000000 * (1.15**(upgrade8Count+1));
                upgrade8Price = upgrade8Price.toFixed(1);
                upgrade8Count ++;
                PPC += 2000;
                console.log(upgrade8Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U9") {
            if (points >= upgrade9Price) {
                points -= upgrade9Price;
                upgrade9Price = 5100000000 * (1.15**(upgrade9Count+1));
                upgrade9Price = upgrade9Price.toFixed(1);
                upgrade9Count ++;
                PPC += 10000;
                console.log(upgrade9Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        if (upgradeID === "U10") {
            if (points >= upgrade10Price) {
                points -= upgrade10Price;
                upgrade10Price = 1000000000 * (1.15**(upgrade10Count+1));
                upgrade10Price = upgrade10Price.toFixed(1);
                upgrade10Count ++;
                PPC += 50000000;
                console.log(upgrade10Count)
            }
            else {
                document.getElementById(upgradeID).style.backgroundColor = "red"
                setTimeout(() => {  document.getElementById(upgradeID).style.backgroundColor = ""; }, 200);
            }
        }
        update()
    }

// upgrade tab open:
    var upgradeOpen = false
    function openUpgrade() {
        if (upgradeOpen === true) {
            document.querySelector(".ground-middle-area").classList.add("upgrade-tab-close");
            document.querySelector(".ground-middle-area").classList.remove("upgrade-tab-open");
            document.querySelector(".upgrade-tab-outer").classList.add("upgrade-tab-fade-out");
            document.querySelector(".upgrade-tab-outer").classList.remove("upgrade-tab-fade-in");
            upgradeOpen = false;
        }
        else {
            document.querySelector(".ground-middle-area").classList.add("upgrade-tab-open");
            document.querySelector(".ground-middle-area").classList.remove("upgrade-tab-close");
            document.querySelector(".upgrade-tab-outer").classList.add("upgrade-tab-fade-in");
            document.querySelector(".upgrade-tab-outer").classList.remove("upgrade-tab-fade-out");
            upgradeOpen = true;
        }
    }
// buildings tab open: 
    var buildingsOpen = false
    function openBuildings() {
        if (buildingsOpen === false) {
            document.querySelector(".ground-middle-area").classList.add("upgrade-tab-close-fully");
            document.querySelector(".ground-middle-area").classList.remove("upgrade-tab-open-partly");
            document.querySelector(".ground-top-area").classList.add("ground-top-area-open");
            document.querySelector(".ground-top-area").classList.remove("ground-top-area-close");
            buildingsOpen = true;
        }
        else {
            document.querySelector(".ground-middle-area").classList.add("upgrade-tab-open-partly");
            document.querySelector(".ground-middle-area").classList.remove("upgrade-tab-close-fully");
            document.querySelector(".ground-top-area").classList.add("ground-top-area-close");
            document.querySelector(".ground-top-area").classList.remove("ground-top-area-open");
            buildingsOpen = false;
        }
    }

// update all values:
    var pointTracker = document.querySelector(".point-tracker");
    function update() {
        pointTracker.textContent = points.toFixed(1);

        document.querySelector(".U1price").textContent = upgrade1Price
        document.querySelector(".U2price").textContent = upgrade2Price
        document.querySelector(".U3price").textContent = upgrade3Price
        document.querySelector(".U4price").textContent = upgrade4Price
        document.querySelector(".U5price").textContent = upgrade5Price
        document.querySelector(".U6price").textContent = upgrade6Price
        document.querySelector(".U7price").textContent = upgrade7Price
        document.querySelector(".U8price").textContent = upgrade8Price
        document.querySelector(".U9price").textContent = upgrade9Price
        document.querySelector(".U10price").textContent = upgrade10Price

        document.querySelector(".points-per-click-tracker").textContent = PPC
    }

// button click animation:
    function buttonClickAnimation(buttonID) {
        document.getElementById(buttonID).classList.add("button-down");
        setTimeout(() => {  document.getElementById(buttonID).classList.remove("button-down"); }, 150);
    }


// tree random placing:
    function treeRandomPlace() {
        var treeNum = 1
        while (treeNum <= 40) {
            var goingUP = Math.random() < 0.5;
            var goingLEFT = Math.random() < 0.5;
            var amountY = Math.floor(Math.random() * (25 - 1 + 1)) +1;
            var amountX = Math.floor(Math.random() * (50 - 1 + 1)) +1;

            if (goingUP === true) {
                document.getElementById(`tree${treeNum}`).style.bottom = amountY + "%"
            }
            if (goingUP === false) {
                document.getElementById(`tree${treeNum}`).style.top = amountY + "%"
                document.getElementById(`tree${treeNum}`).style.zIndex = "97"
            }
            if (goingLEFT === true) {
                document.getElementById(`tree${treeNum}`).style.left = amountX + "%"
            }
            if (goingLEFT === false) {
                document.getElementById(`tree${treeNum}`).style.right = amountX + "%"
            }

            treeNum ++
        }
    }

// lumberjack movement:
    function lumberjackMove1() {
        document.querySelector(".lumberjack").classList.remove("lumberjack-right")
        document.querySelector(".lumberjack").classList.add("lumberjack-left")
        setTimeout(() => {  lumberjackMove2(); }, 30000);
    }
    function lumberjackMove2() {
        document.querySelector(".lumberjack").classList.remove("lumberjack-left")
        document.querySelector(".lumberjack").classList.add("lumberjack-right")
        setTimeout(() => {  lumberjackMove1(); }, 30000);
    }

update()
treeRandomPlace()
lumberjackMove1()