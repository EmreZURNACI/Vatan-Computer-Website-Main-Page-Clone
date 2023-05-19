const corouselImages = document.querySelectorAll("header div:nth-child(6).container ul li");
for (let i = 0; i < corouselImages.length; i++) {
    corouselImages[i].addEventListener("mouseover", function () {
        document.querySelectorAll(".blueLine")[i + 11].style.backgroundColor = "#3b5998";
    });
    corouselImages[i].addEventListener("mouseout", function () {
        document.querySelectorAll(".blueLine")[i + 11].style.backgroundColor = "white";
    })
}
const menuLinks = document.querySelectorAll(".menuLinks");
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("mouseover", function () {
        document.querySelectorAll(".blueLine")[i].style.backgroundColor = "#3b5998";
    });
    menuLinks[i].addEventListener("mouseout", function () {
        document.querySelectorAll(".blueLine")[i].style.backgroundColor = "white";
    })
}
var devaminiOku = document.querySelector(".devaminiOku");
var hakkımızda = document.querySelector(".hakkımızda");
devaminiOku.addEventListener("click", function () {
    this.style.display = "none";
    hakkımızdaContent = `<p class='text-center color-333 fs-5'>Uygun fiyatlarla sizlere hizmet etmek için çalışıyoruz. Vatan Bilgisayar ailesi olarak başlıca hedefimiz Türkiye’nin bir uçtan bir ucuna kadar donatılmış mağazalarımızla her bütçeye hitap ederek siz kullanıcılarımızın memnuniyetini sağlamaktır. Online alışveriş sitemizde taksit seçenekleri, kolay iade, hızlı kargo gibi hizmetler ile alışveriş deneyiminizi arttırmaya, kolaylaştırmaya ve kısa sürede sonuç almanızı sağlamaya çalışıyoruz. Vatan Bilgisayar’dan satın alacağınız tüm ürünleri orijinal paketleriyle kusursuz olarak tarafınıza iletmekteyiz. Elektronik ürünlerde Akıllı Cep Telefonundan Televizyona, Akıllı Saatten Notebooklara ve farklı kategoride binlerce ürüne kolaylıkla ulaşabilirsiniz. Ayrıca kişisel ihtiyaçlarınız, eviniz ve ofisiniz için de Vatan Bilgisayar geniş ürün gamıyla size bir tık kadar yakın.
  <br><br>
  Günümüz Çağının Gelişen ve Sürekli Yenilenen Teknolojisi Akıllı Cep Telefonlarını birçok marka ve modellerini Vatan Bilgisayar’da bulabilirsiniz.Tüm ihtiyaçlarınıza cevap verebilecek Apple, General Mobile, Huawei, Oppo, Realme, Samsung, Tcl, Tecno, Vivo, Xiaomi gibi markalar tarafından üretilen akıllı cep telefonlarını www.vatanbilgisayar.com adresinden veya Vatan Bilgisayar mağazalarından satın alabilirsiniz.
  <br><br>
  Notebookdan Masaüstü Bilgisayarına, Oyuncu Bilgisayarından Tablete Kadar Son Teknoloji Ürünlerini Vatan’da farklı özellik ve modelde inceleyebilirsiniz. Dizüstü bilgisayarları, masaüstü bilgisayarları, oyun bilgisayarları, geniş ekranlı monitörler, kavisli ekran, oyuncu monitörleri, oem hazır sistemleri gibi çeşitli ürün kategorilerini web sitemiz üzerinden sipariş verebilir, Acer, Apple, Asus, Casper, Exper, HP, Lenovo, Samsung, Msi, AOC gibi ünlü markaları uygun fiyat seçenekleri ile Vatan Bilgisayar’dan satın alabilirsiniz. 
  <br><br>
  Eğlencenin Vazgeçilmez Adresi Haline Gelen Televizyon modellerini Vatan Bilgisayar aracılığıyla inceleyebilir ve satın alabilirsiniz. Axen, Grundig, LG, Onvo, Philips, Samsung, Seg, Sony, Tcl ve Vestel markaları tarafından üretilen televizyonları, ihtiyaçlarınızı göz önüne alarak farklı özelliklere, tasarıma ve donanıma sahip televizyonları web sitemiz üzerinden ya da Vatan Bilgisayar mağazalarından inceleyerek, en uygun olan ürünü satın alabilirsiniz. Televizyon ve bilgisayardaki görüntüleri düz bir zemine Projeksiyon Cihazları ile yansıtabilirsiniz. LCD, LED veya DLP gibi yansıtma sistemleriyle evinizde sinema salonu oluşturabilirsiniz. Okul, iş yerleri gibi kalabalık gruplara gösteri yapmak için kolaylık sağlamaktadır. Epson, Philips, ViewSonic gibi markalar sizleri bekliyor.
  <br><br>
  Bilgisayarınızı Daha İyi Kullanabilmeniz İçin Bilgisayar Bileşenleri, birçok açıdan fayda sağlayacak ve işlerinizi daha da kolaylaştıracaktır. Bilgisayar bileşenleri ve bilgisayar oem parçaları AMD, AOC, Apple, Asus, Cooler Master, Corsair, Cougar, MSI, OEM, Rampage, Toshiba gibi marka seçenekleriyle incelemeniz ve satın almanız için Vatan Bilgisayar’da sizleri bekliyor. Web sitemizde bulunan Pc Toplama sayfası aracılığıyla, bilgisayar toplama sihirbazına erişerek, yaptığınız birbiriyle son derece uyumlu ve sorunsuz çalışacak tüm donanım cihazlarını toplayabilir, kendinize özel kurduğunuz bilgisayar sisteminize ekleyerek, hayallerinizdeki bilgisayara kavuşabilirsiniz. PC ve Notebook uyumlu Corsair, Crucial, Gskill, Kingston marka ramleri uygun fiyatlı taksit seçenekleri, kampanya ve indirimlerle Vatan Bilgisayar'dan satın alabilirsiniz. İşlemciler bilgisayarın genel performansından sorumlu en önemli donanımıdır. Core i3, Core i5, Core i7,  Amd ve Intel işlemcilerini taksit seçenekleriyle satın almak için Vatan Bilgisayar’ı takip edin. 
  <br><br>
  Manzara Fotoğrafları veya Video Çekimlerinin yanı sıra askeriye, trafik ve tarım gibi alanlarda da kullanılan  DJI marka drone ve ev elektroniği kategorimizden inceleyebilirsiniz. Eğer fotoğraf ve video çekimlerinize farklı bir boyut kazandırmak istiyorsanız Video ve Outdoor Kameralar işte tam da sizin için uygun cihazlardır. GOPRO, SONY marka video ve Aksiyon & Outdoor Kamera Aksesuarlarına en yakın Vatan Bilgisayar mağazamızdan veya web sitemizden ulaşabilirsiniz. Ofisinizde Yazıcı, Tarayıcı, Kartuş, Toner, Kâğıt ve CD gibi sarf malzemesi ihtiyaçlarınız için bu alanda öncü olan Brother, Xerox, Canon, Epson, HP gibi markaların yüzlerce ürününü tek tıkla kapınıza kadar getirelim. 
  <br><br>
  Evinizin olmazsa olmazları;Küçük Ev Aletleri, Fakir, Delonghi, Grundig, Tefal, Korkmaz, Braun, Arzum, Nespresso ve daha birçok markanın modelleri cep dostu fiyatlarla sizlerle. Elektrikli ev aletlerinde; süpürgeler, ütüler, soğutma ve ısıtmalar gibi eviniz için önem arz eden  kategorilerde dilediğiniz her ürünü bulabilirsiniz. Mutfağınızda bulunması gereken blendarlar, tost makineleri, rondolar, fritözler, mikserler, mutfak şefleri, türk kahve makineleri, filtre kahve makineleri, çay makineleri, katı meyve sıkacakları ve birçok kategorideki ürünler Vatan Bilgisayar’da.
  <br><br>
  Elektrikli Kişisel Bakım Ürünleri; saç maşaları, saç düzleştiricileri, saç kurutma makineleri, epilasyon aletleri, tıraş makineleri, ağız ve diş bakım ürünleri, şarjlı diş fırçaları gibi ürünlerini Arzum, Braun, Philips, Remington, Grundig gibi bir çok markalara ait web sitemizden inceleyebilirsiniz. Yüzlerce ünlü markaya ait ürünleri hızlı bir şekilde çeşitli ödeme seçenekleriyle vatanbilgisayar.com’dan güvenli bir şekilde satın alabilirsiniz.<b> Keyifli alışverişler dileriz..</b> `;
    hakkımızda.insertAdjacentHTML("beforeend", hakkımızdaContent);
})