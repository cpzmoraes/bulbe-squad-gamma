
    const radius = document.getElementById('radius');
    const circleLayer = document.getElementById('circleLayer');
    const metrics = document.getElementById('metrics');
    const kmText = document.getElementById('kmText');
    const moneyText = document.getElementById('moneyText');
    const clientsText = document.getElementById('clientsText');
    const perClientText = document.getElementById('perClientText');
    const co2Text = document.getElementById('co2Text');

    const data = {
      15: { scale: .78, money: '6.180,00', clients: 124, per: 'R$ 89', co2: '48 ton', zoom: 12 },
      30: { scale: 1, money: '12.345,00', clients: 312, per: 'R$ 155', co2: '125 ton', zoom: 11 },
      45: { scale: 1.18, money: '22.740,00', clients: 518, per: 'R$ 198', co2: '211 ton', zoom: 10 }
    };

    const defaultPosition = [-19.932, -43.937];
    let userPosition = defaultPosition;

    const map = L.map('map', {
      zoomControl: false,
      attributionControl: false,
      dragging: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      keyboard: false
    }).setView(defaultPosition, 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      crossOrigin: true
    }).addTo(map);

    const areaCircle = L.circle(defaultPosition, {
      radius: 30000,
      color: '#2684ff',
      opacity: 0,
      fillColor: '#4a96ff',
      fillOpacity: 0
    }).addTo(map);

    function updateScreen() {
      const km = radius.value;
      const item = data[km];
      const min = Number(radius.min);
      const max = Number(radius.max);
      const val = Number(km);
      const percent = ((val - min) / (max - min)) * 100;
      radius.style.background = `linear-gradient(to right, #0762c7 0%, #0762c7 ${percent}%, #a4b3c1 ${percent}%, #a4b3c1 100%)`;

      circleLayer.style.transform = `translate(-50%, -50%) scale(${item.scale})`;
      areaCircle.setRadius(Number(km) * 1000);
      map.setView(userPosition, item.zoom, { animate: true });

      metrics.classList.add('show');
      kmText.textContent = `${km} km`;
      moneyText.textContent = item.money;
      clientsText.textContent = item.clients;
      perClientText.textContent = item.per;
      co2Text.textContent = item.co2;
    }

    function useUserLocation() {
      if (!navigator.geolocation) {
        updateScreen();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        function (pos) {
          userPosition = [pos.coords.latitude, pos.coords.longitude];
          map.setView(userPosition, data[radius.value].zoom);
          areaCircle.setLatLng(userPosition);
          updateScreen();
        },
        function () {
          updateScreen();
        },
        { enableHighAccuracy: true, timeout: 7000, maximumAge: 60000 }
      );
    }

    radius.addEventListener('input', updateScreen);
    radius.addEventListener('change', updateScreen);

    lucide.createIcons();
    setTimeout(() => map.invalidateSize(), 150);
    useUserLocation();

    useUserLocation();
