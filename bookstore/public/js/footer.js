const footerDiv = document.createElement('div');
footerDiv.innerHTML = `
<footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-column">
            <div class="h1">Kategoriler</div>
            <ul class="container1">
              <li><a href="#">Akademik</a></li>
              <li><a href="#">Bilim ve Mühendislik</a></li>
              <li><a href="#">Çocuk Kitapları</a></li>
              <li><a href="#">Din</a></li>
              <li><a href="#">Edebiyat</a></li>
              <li><a href="#">Eğitim</a></li>
              <li><a href="#">Eğlence / Mizah</a></li>
              <li><a href="#">Ekonomi</a></li>
              <li><a href="#">Felsefe</a></li>
              <li><a href="#">Kişisel Gelişim</a></li>
              <li><a href="#">Psikoloji</a></li>
              <li><a href="#">Sanat</a></li>
              <li><a href="#">Sınava Hazırlık</a></li>
              <li><a href="#">Sinema / Tiyatro</a></li>
              <li><a href="#">Siyaset</a></li>
              <li><a href="#">Sosyoloji</a></li>
              <li><a href="#">Spor</a></li>
              <li><a href="#">Tarih</a></li>
              <li><a href="#">Yabancı Dillerdeki Kitaplar</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <div class="h2">Yardım</div>
            <ul class="container2">
              <li><a href="#">Siparişler</a></li>
              <li><a href="#">Teslimat ve Kargo</a></li>
              <li><a href="#">Sipariş İptali</a></li>
              <li><a href="#">İade İşlemleri</a></li>
              <li><a href="#">Ödeme Yöntemleri</a></li>
              <li><a href="#">Sıkça Sorulan Sorular</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <ul class="footer-right-side-container1">
              <li><a href="#" class="order_tracking"><img src="../assets/order_tracking.svg"></a></li>
              <li><a href="#" class="whatsapp"><img src="../assets/whatsapp.svg"></a></li>
            </ul>
            <ul class="footer-right-side-container2">
              <ul class="text">
                <li>Bizi Takip Edin</li>
              </ul>
              <ul class="social-media-icons">
                <li><a href="#" class="instagram"><img src="../assets/instagram.svg"></a></li>
                <li><a href="#" class="facebook"><img src="../assets/facebook.svg"></a></li>
                <li><a href="#" class="twitter"><img src="../assets/twitter.svg"></a></li>
              </ul>
            </ul>
          </div>
      </div>
        </div>
        <div class="footer-bottom">
          <ul>
            <li><a href="#">Gizlilik ve Güvenlik</a></li>
            <span>•</span>
            <li><a href="#">Çerez Politikası</a></li>
            <span>•</span>
            <li><a href="#">Satış Sözleşmesi</a></li>
            <span>•</span>
            <li><a href="#">Bilgi Toplumu Hizmetleri</a></li>
            <span>•</span>
            <li><a href="#">Kişisel Verilere İlişkin Aydınlatma Metni</a></li>
          </ul>
        </div>
      </div>
    </footer>
`;
var footer = document.querySelector(".footer");
footer.appendChild(footerDiv);