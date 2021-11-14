(async () => {
  let res = await fetch("data.json");
  let data = await res.json();
  let seats = new Array(60).fill({ statusColor: data.statusColor.empty });

  data.seats.forEach((seat) => {
    seats[seat.seat - 1] = {
      ...seat,
      statusColor: data.statusColor[seat.status],
    };
  });

  new Vue({
    el: "#app",
    data: {
      seats,
    },
  });
})();
