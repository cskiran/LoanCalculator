document.getElementById('loan-form').addEventListener('submit',function(e){
  //Hide loader
  document.getElementById('results').style.display = 'none';
  //show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults,2000);

  e.preventDefault();
});


function calculateResults(){
  console.log('calculating...')
  //UI variables
  const UIamount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');

  const monthlyPayment = document.getElementById('monthly-payment');

  const totalPayment = document.getElementById('total-payment');

  const totalInterest = document.getElementById('total-interest');

  const principle = parseFloat(amount.value);
  const calculateInterest = parseFloat(interest.value)/100/12;
  const calculatePayments = parseFloat(years.value)*12;

  //compute monthly payment
  const x = Math.pow(1+ calculateInterest,calculatePayments);
  const monthly = (principle*x*calculateInterest)/(x-1);

  if(isFinite(monthly)){
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatePayments).toFixed(2);
    totalInterest.value = ((monthly*calculatePayments)-principle).toFixed(2);

    //show results
    document.getElementById('results').style.display = 'block';

    //hide loader
    document.getElementById('loading').style.display = 'none';
  }else{
    showError('Please check your numbers');
    document.getElementById('loading').style.display = 'none';
  }


  
}

function showError(error){
  //createa div
  const errorDiv = document.createElement('div');

  //Get Elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');


  //Add class
  errorDiv.className = 'alert alert-danger';

  errorDiv.appendChild(document.createTextNode(error));

  card.insertBefore(errorDiv,heading);

  //clear error after 3 sec
  setTimeout(clearError,3000);
}

//clear error function
function clearError(){
  document.querySelector('.alert').remove();
}