<script type="module">
  // Configuração do Firebase (usa os teus valores reais)
  const firebaseConfig = {
    apiKey: "AIzaSyDnJzzyFXyhmohrOSVrrXhmrVrVHjpeUSQ",
    authDomain: "mundoraiz-e8e08.firebaseapp.com",
    projectId: "mundoraiz-e8e08",
    storageBucket: "mundoraiz-e8e08.firebasestorage.app",
    messagingSenderId: "461587763140",
    appId: "1:461587763140:web:487528650faddfd4869e91"
  };

  // Inicializar Firebase
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  // Tornar a base de dados acessível às outras páginas
  window.db = db;
</script>
