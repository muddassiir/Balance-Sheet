var cash=document.getElementById('cash');
var inventory=document.getElementById('inv');
var recieveable=document.getElementById('rec');
var otherAssets=document.getElementById('otherAssets');
var totalAssets=document.getElementById('totalAssets');

var payables=document.getElementById('pay');
var otherLiability=document.getElementById('otherLiab');
var totalLiability=document.getElementById('totalLiab');

var noOfShares=document.getElementById('noOfShares');
var valueOfShare=document.getElementById('valueOfShare');
var totalEquity=document.getElementById('totalEquity');

cash=cash.innerHTML;
inventory=inventory.innerHTML;
recieveable=recieveable.innerHTML;
otherAssets=otherAssets.innerHTML;

payables=payables.innerHTML;
otherLiability=otherLiability.innerHTML;

noOfShares=noOfShares.innerHTML;


var Assets=Number(cash)+Number(inventory)+Number(recieveable)+Number(otherAssets);
var Liability=Number(payables)+Number(otherLiability);
var Equity=Assets-Liability;
var shareValue=Equity/noOfShares;

totalAssets.innerHTML=Assets;
totalLiability.innerHTML=Liability;
totalEquity.innerHTML=Equity;
valueOfShare.innerHTML=shareValue.toFixed(2);



function printDiv(balancesheet){
    var printContents = document.getElementById(balancesheet).innerHTML;
    var originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}