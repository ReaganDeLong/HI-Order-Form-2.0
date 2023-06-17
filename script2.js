
/* Copy to new page */
const generate = document.getElementById('generate');
generate.addEventListener('click', function(event) {
    event.preventDefault();
    
    let client1Name = document.getElementById('client1-name').value;
    let client1Email = document.getElementById('client1-email').value;
    let client1Number = document.getElementById('client1-number').value;
    let client2Name = document.getElementById('client2-name').value;
    let client2Email = document.getElementById('client2-email').value;
    let client2Number = document.getElementById('client2-number').value;
    
    let orderDate = document.getElementById('order-date').value;
    let inspectionDate = document.getElementById('inspection-date').value;
    let inspectionTime = document.getElementById('inspection-time').value;
    let takenBy = document.getElementById('order-taken-by').value;
    let referral = document.getElementById('referral').value;
    let otherReferral = document.getElementById('other-source').value;
    let attendance = document.getElementById('attendance').value;
    let authorized = document.getElementById('authorized').value;
    let otherAuth = document.getElementById('other-auth').value;

    let baName = document.getElementById('ba-name').value;
    let baEmail = document.getElementById('ba-email').value;
    let baNumber = document.getElementById('ba-number').value;
    let laName = document.getElementById('la-name').value;
    let laEmail = document.getElementById('la-email').value;
    let laNumber = document.getElementById('la-number').value;

    let address = document.getElementById('address').value;
    let city = document.getElementById('city').value;
    let zip = document.getElementById('zip').value;
    let neighborhood = document.getElementById('neighborhood').value;
    let access = document.getElementById('access').value;
    let otherAccess = document.getElementById('other-access').value;
    let lockbox = document.getElementById('lockbox').value;
    let age = document.getElementById('age').value;
    let footage = document.getElementById('footage').value;
    let bedrooms = document.getElementById('bedrooms').value;
    let bathrooms = document.getElementById('bathrooms').value;
    let hvac = document.getElementById('hvac').value;
    let kitchens = document.getElementById('kitchens').value;
    let salesPrice = document.getElementById('sales-price').value;
    let crawlspace = document.getElementById('crawl').value;
    let radon = document.getElementById('radon').value;
    let otherArea = document.getElementById('other-area').value;
    let otherAreaFee = document.getElementById('other-area-fee').value;

    let inspectionFee = document.getElementById('inspection-fee').value;
    let crawlFee = document.getElementById('crawl-fee').value;
    let radonFee = document.getElementById('radon-fee').value;
    let addAreaFee = document.getElementById('additional-area-fee').value;
    let overridePrice = document.getElementById('override-price').value;
    let overrideReason = document.getElementById('override').value;


    let newWindow = window.open();
    newWindow.document.write(`
    <!DOCTYPE html>
<html>
<head>
  <title>User Information</title>
</head>
<style>
     .container {
      display: flex;
      flex-direction: column;
    }

    .row {
      display: flex;
      flex-direction: row;
      margin-bottom: 10px;
    }

    .row > div {
      margin-right: 10px;
      border: 1px solid black;
      padding: 5px;
    }

    p {
        font-size: 12px;
    }
</style>
<body>
<div class="container">
    <div class="row">
        <div>
            <h3>Client Information</h3>
            <p><strong>Client # 1 Name:</strong> ${client1Name}</p>
            <p><strong>Client # 1 Email:</strong> ${client1Email}</p>
            <p><strong>Client # 1 Number:</strong> ${client1Number}</p>
            <p><strong>Client # 2 Name:</strong> ${client2Name}</p>
            <p><strong>Client # 2 Email:</strong> ${client2Email}</p>
            <p><strong>Client # 2 Number:</strong> ${client2Number}</p>
        </div>
        <div>
            <h3>Order Information</h3>
            <p><strong>Order Date:</strong> ${orderDate}</p>
            <p><strong>Inspection Date:</strong> ${inspectionDate}</p>
            <p><strong>Inspection Time:</strong> ${inspectionTime}</p>
            <p><strong>Order Taken By:</strong> ${takenBy}</p>
            <p><strong>Referral Source:</strong> ${referral}</p>
            <p><strong>Other Source:</strong> ${otherReferral}</p>
            <p><strong>Who will be at the inspection:</strong> ${attendance}</p>
            <p><strong>Inspeciton Authorized by:</strong> ${authorized}</p>
            <p><strong>Other Authorized:</strong> ${otherAuth}</p>
        </div>
        <div>
            <h3>Agent Information</h3>
            <p><strong>Buyer's Agent Name: </strong> ${baName}</p>
            <p><strong>BA Email: </strong> ${baEmail}</p>
            <p><strong>BA Phone Number: </strong> ${baNumber}</p>
            <p><strong>Listing Agent Name: </strong>${laName}</p>
            <p><strong>LA Email: </strong> ${laEmail}</p>
            <p><strong>LA Phone Number: </strong> ${laNumber}</p>
        </div>
        <div>
            <h3>Property Information</h3>
            <p><strong>Property Address: </strong>${address}</p>
            <p><strong>City: </strong>${city}</p>
            <p><strong>Zip: </strong>${zip}</p>
            <p><strong>Neighborhood / Subdivision: </strong>${neighborhood}</p>
            <p><strong>Access: </strong>${access}</p>
            <p><strong>Other Access: </strong>${otherAccess}</p>
            <p><strong>CBS / Lockbox: </strong>${lockbox}</p>
            <p><strong>Year Built: </strong>${age}</p>
            <p><strong>Square Footage: </strong>${footage}</p>
            <p><strong># of Bedrooms: </strong>${bedrooms}</p>
            <p><strong># of Bathrooms: </strong>${bathrooms}</p>
            <p><strong># of Kitchens: </strong>${kitchens}</p>
            <p><strong># of HVAC: </strong>${hvac}</p>
            <p><strong>Sales Price: </strong>${salesPrice}</p>
            <p><strong>Crawlspace? </strong>${crawlspace}</p>
            <p><strong>Radon? </strong>${radon}</p>
            <p><strong>Additional Area: </strong>${otherArea}</p>
            <p><strong>Additional Area Fee: </strong>${otherAreaFee}</p>
        </div>
        <div>
            <p><strong>Inspection Fee: </strong>${inspectionFeeFinal.innerHTML}</p>
            <p><strong>Crawl Fee: </strong>${crawlspaceFeeFinal.innerHTML}</p>
            <p><strong>Radon Fee: </strong>${radonFeeFinal.innerHTML}</p>
            <p><strong>Additional Area Fee: </strong> ${addAreaFeeFinal.innerHTML}</p>
            <p><strong>Total Fee: </strong> ${totalFeeFinal.innerHTML}</p>
        
            <p><strong>Override Price: </strong> ${overridePrice}</p>
            <p><strong>Override Reason: </strong> ${overrideReason}</p>
        </div>
    </div>
</div>

</body>
</html>
    `);



});

