const numBaskets = 10;
const numEjections = 100;
let basketData = new Array(numBaskets).fill(0);
let ejectedNumbers = [];

const basketChart = new Chart('basketChart', {
  type: 'bar',
  data: {
    labels: Array.from({ length: numBaskets }, (_, i) => `Basket ${i + 1}`),
    datasets: [{
      label: 'Number Distribution',
      data: basketData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        max: numEjections
      }
    }
  }
});

function ejectNumber() {
  if (ejectedNumbers.length < numEjections) {
    const randomNumber = Math.floor(Math.random() * 2);
    const randomBasket = Math.floor(Math.random() * numBaskets);

    basketData[randomBasket]++;
    ejectedNumbers.push(randomNumber);

    basketChart.data.datasets[0].data = basketData;
    basketChart.update();
  }
}
