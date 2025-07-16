    <script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(reg => console.log('서비스 워커 등록됨:', reg.scope))
      .catch(err => console.error('서비스 워커 등록 실패:', err));
  }
    </script>
