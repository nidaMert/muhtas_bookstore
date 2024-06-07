const template = document.createElement('template');
template.innerHTML = `
<header>
                    <div class="top-header">
                        <ul>
                            <li class="logo"><img src="../assets/bookstoreLogo.svg"></li>
                            <li>
                              <div class="search-bar-container">
                                <form><input type="search" placeholder="Aradığınız kitap adını veya kategoriyi giriniz...">
                                  <input type="button">
                                </form>
                              </div>
                            </li>
                            <li>
                              <div class="right-side-container">
                                <a href="#" class="cart"><img src="../assets/cart.svg"></a>
                                <a href="#" class="favourite"><img src="../assets/favourite.svg"></a>
                                <a href="../pages/login.html" class="user_circle"><img src="../assets/user_circle.svg"></a>
                              </div>
                            </li>
                        </ul>
                    </div>
                    <div class="bottom-header">
                        <ul>
                            <li class="link"><a href="#">Çok Satanlar</a></li>
                            <li class="link"><a href="#">Yeni Eklenenler</a></li>
                            <li class="link"><a href="#">Türler</a></li>
                            <li class="link"><a href="#">Yazarlar</a></li>
                            <li class="link"><a href="#">Yayınevleri</a></li>
                            <li class="link"><a href="#">Kampanyalar</a></li>
                            <li class="link"><a href="#">Sahaflar</a></li>
                        </ul>
                    </div>
      </header>
      
`;
document.body.appendChild(template.content);

/*
const headerDiv = document.createElement('div');
headerDiv.innerHTML = ``;
var header = document.querySelector(".header");
header.appendChild(headerDiv);
*/