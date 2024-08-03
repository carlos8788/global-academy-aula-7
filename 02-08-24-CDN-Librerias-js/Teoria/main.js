const container = document.querySelector("#wrapper");
new gridjs.Grid({
  columns: ["Nombre", "Email", "Telefono"],
  data: [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
  ],
  search: true,
  sort: true,
  pagination: {
    enabled: true,
    limit: 3,
  },
}).render(container);

const btn = document.querySelector(".btn-alert");

btn.addEventListener("click", function () {
  //alert("hola")
  Swal.fire({
    title: "Exito!",
    text: "Esto es una alerta de exito",
    icon: "success",
    confirmButtonText: "Aceptar",
    background: "rgb(112, 112, 207)",
    position: "bottom",
  });
});

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar", // Tipo de gráfico: 'bar', 'line', 'pie', etc.
  data: {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ventas",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          "rgba(0, 0, 0, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(0, 0, 0, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
