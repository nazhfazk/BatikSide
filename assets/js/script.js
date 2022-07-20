const listBatik = [{
        name: "Batik Parang Kusumo",
        img: "./assets/img/Parang Kusumo.jpg",
        daerah: "Solo",
        desc: "Kota Solo terkenal sebagai salah satu kota batik di Indonesia yang menghasilkan banyak macam macam batik Nusantara berbagai motif. Salah satu jenis batik terkenal dari Solo adalah batik parang kusumo, yakni batik yang memiliki motif menyerupai gulungan ombak lautan. Motif tersebut mengandung filosofi bahwa hidup dilandasi oleh perjuangan dan usaha untuk mencapai kemakmuran lahir batin dengan mengindahkan nilai-nilai kebudayaan Jawa."
    },
	{
        name: "Batik Mega Mendung",
        img: "./assets/img/Mega Mendung.jpg",
        daerah: "Cirebon",
        desc: "Batik mega mendung asal Cirebon memiliki gumpalan awan yang dipercantik dengan tujuh gradasi warna untuk menciptakan kesan mendung. Filosofi batik mega mendung adalah manusia harus bisa meredam emosinya dalam kondisi apapun."
    },
	{
        name: "Batik Sidomukti",
        img: "./assets/img/Sidomukti.jpg",
        daerah: "Solo",
        desc: "Batik sidomukti asal Solo dicat menggunakan zat pewarna soga alam, yakni pewarna berwarna coklat yang digunakan dalam seni batik klasik. Filosofi dari batik sidomukti adalah sesuai dengan kemuliaan dan kesejahteraan sebagaimana fungsinya untuk keraton."
    },
	{
        name: "Batik Sidoluhur",
        img: "./assets/img/Sidoluhur.jpg",
        daerah: "Solo",
        desc: "Batik sidoluhur asal Solo diperuntukkan untuk acara pernikahan karena dipakai pengantin wanita pada saat malam pengantin. Filosofi yang terkandung dalam batik ini adalah sebuah bentuk doa kepada pemakainya supaya menjadi orang yang terhormat dan bermartabat."
    },
	{
        name: "Batik Tambal",
        img: "./assets/img/Tambal.jpg",
        daerah: "Yogyakarta",
        desc: "Pada zaman dahulu, batik tambal asal Yogyakarta digunakan untuk menyelimuti orang yang sakit karena dipercaya dapat membantu kesembuhan."
    },
	{
        name: "Batik Ulamsari Mas",
        img: "./assets/img/Ulamsari Mas.jpg",
        daerah: "Bali",
        desc: "Batik ulamsari mas memiliki motif ikan dan utang yang merupakan mata pencaharian masyarakat nelayan Bali. Makna yang terkandung dari batik ini adalah kesejahteraan dan kemakmuran bagi masyarakat di pesisir pantai."
    },
	{
        name: "Batik Pring Sedapur",
        img: "./assets/img/Pring Sedapur.jpg",
        daerah: "Magetan",
        desc: "Batik pring sedapur memiliki motif yang sesuai dengan namanya, yakni menggunakan motif bambu. Adapun makna dari motifnya adalah melambangkan simbol ketentraman dan kerukunan hidup."
    },
	{
        name: "Batik Tujuh Rupa",
        img: "./assets/img/Tujuh Rupa.jpg",
        daerah: "Pekalongan",
        desc: "Kota Pekalongan dijuluki sebagai Kota Batik, meskipun batik tumbuh di Yogyakarta dan Solo. Salah satu batik terkenal asal Pekalongan adalah batik tujuh rupa yang mengandung filosofi ikatan kebudayaan leluhur."
    },
	{
        name: "Batik Lasem",
        img: "./assets/img/Lasem.jpg",
        daerah: "Rembang",
        desc: "Daerah Lasem, Rembang, diketahui sebagai daerah yang pertama kali menerima kedatangan Tionghoa. Oleh karena adanya pengaruh kebudayaan Tionghoa, batik lasem pun didominasi warna merah. Filosofi dari batik ini adalah persatuan dan akulturasi budaya Tionghoa dengan masyarakat setempat."
    },
	{
        name: "Batik Singa Barong",
        img: "./assets/img/Singa Barong.jpg",
        daerah: "Cirebon",
        desc: "Sesuai namanya, batik singa barong asal Cirebon menggunakan motif hewan mitologi yang bersifat spiritual."
    },
	{
        name: "Batik Sekar Jagad",
        img: "./assets/img/Sekar Jagad.jpg",
        daerah: "Yogyakarta",
        desc: "Batik sekar Jagad adalah salah satu dari macam macam batik Nusantara yang memiliki motif unik. Motif batik asal Yogyakarta ini melambangkan keragaman Nusantara dan dunia."
    },
	{
        name: "Batik Jagatan Pisang",
        img: "./assets/img/Jagatan Pisang.jpg",
        daerah: "Bali",
        desc: "Batik jagatan pisang, sesuai namanya, batik asal Bali ini memiliki motif pisang. Biasanya, batik ini digunakan sebagai pemberian pada sosok terkasih yang hendak pergi jauh."
    },
	{
        name: "Batik Priyangan",
        img: "./assets/img/Priyangan.jpg",
        daerah: "Tasikmalaya",
        desc: "Batik priyangan asal Tasikmalaya memiliki motif yang meriah, yakni pola-pola yang dibentuk merapat dengan menggunakan warna yang cerah."
    },
	{
        name: "Batik Garutan",
        img: "./assets/img/Garutan.jpg",
        daerah: "Garut",
        desc: "Batik garutan asal Garut memiliki motif yang khas dengan bentuk geometris yang didominasi dengan warna-warna kalem."
    },
	{
        name: "Batik Tubo",
        img: "./assets/img/Tubo.jpg",
        daerah: "Ternate",
        desc: "Batik tubo memiliki ciri khas motif yang berbentuk cengkeh, pala, peta Maluku Utara, dan berbagai unsur-unsur kehidupan yang berasal dari Indonesia Timur."
    },
];

var batikModal = document.getElementById("batikModal");
var span = document.getElementsByClassName("close-modal")[0];

function ParangKusumo(batikModal) {
    let ParangKusumo = listBatik[0];
    document.getElementById("gambar").src = ParangKusumo.img;
    document.getElementById("nama-batik").innerHTML = ParangKusumo.name;
    document.getElementById("daerah").innerHTML = ParangKusumo.daerah;
    document.getElementById("deskripsi").innerHTML = ParangKusumo.desc;
    batikModal.style.display = "block";
}

function MegaMendung(batikModal) {
    let MegaMendung = listBatik[1];
    document.getElementById("gambar").src = MegaMendung.img;
    document.getElementById("nama-batik").innerHTML = MegaMendung.name;
    document.getElementById("daerah").innerHTML = MegaMendung.daerah;
    document.getElementById("deskripsi").innerHTML = MegaMendung.desc;
    batikModal.style.display = "block";
}

function Sidomukti(batikModal) {
    let Sidomukti = listBatik[2];
    document.getElementById("gambar").src = Sidomukti.img;
    document.getElementById("nama-batik").innerHTML = Sidomukti.name;
    document.getElementById("daerah").innerHTML = Sidomukti.daerah;
    document.getElementById("deskripsi").innerHTML = Sidomukti.desc;
    batikModal.style.display = "block";
}

function Sidoluhur(batikModal) {
    let Sidoluhur = listBatik[3];
    document.getElementById("gambar").src = Sidoluhur.img;
    document.getElementById("nama-batik").innerHTML = Sidoluhur.name;
    document.getElementById("daerah").innerHTML = Sidoluhur.daerah;
    document.getElementById("deskripsi").innerHTML = Sidoluhur.desc;
    batikModal.style.display = "block";
}

function Tambal(batikModal) {
    let Tambal = listBatik[4];
    document.getElementById("gambar").src = Tambal.img;
    document.getElementById("nama-batik").innerHTML = Tambal.name;
    document.getElementById("daerah").innerHTML = Tambal.daerah;
    document.getElementById("deskripsi").innerHTML = Tambal.desc;
    batikModal.style.display = "block";
}

function UlamsariMas(batikModal) {
    let UlamsariMas = listBatik[5];
    document.getElementById("gambar").src = UlamsariMas.img;
    document.getElementById("nama-batik").innerHTML = UlamsariMas.name;
    document.getElementById("daerah").innerHTML = UlamsariMas.daerah;
    document.getElementById("deskripsi").innerHTML = UlamsariMas.desc;
    batikModal.style.display = "block";
}

function PringSedapur(batikModal) {
    let PringSedapur = listBatik[6];
    document.getElementById("gambar").src = PringSedapur.img;
    document.getElementById("nama-batik").innerHTML = PringSedapur.name;
    document.getElementById("daerah").innerHTML = PringSedapur.daerah;
    document.getElementById("deskripsi").innerHTML = PringSedapur.desc;
    batikModal.style.display = "block";
}
function TujuhRupa(batikModal) {
    let TujuhRupa = listBatik[7];
    document.getElementById("gambar").src = TujuhRupa.img;
    document.getElementById("nama-batik").innerHTML = TujuhRupa.name;
    document.getElementById("daerah").innerHTML = TujuhRupa.daerah;
    document.getElementById("deskripsi").innerHTML = TujuhRupa.desc;
    batikModal.style.display = "block";
}
function Lasem(batikModal) {
    let Lasem = listBatik[8];
    document.getElementById("gambar").src = Lasem.img;
    document.getElementById("nama-batik").innerHTML = Lasem.name;
    document.getElementById("daerah").innerHTML = Lasem.daerah;
    document.getElementById("deskripsi").innerHTML = Lasem.desc;
    batikModal.style.display = "block";
}
function SingaBarong(batikModal) {
    let SingaBarong = listBatik[9];
    document.getElementById("gambar").src = SingaBarong.img;
    document.getElementById("nama-batik").innerHTML = SingaBarong.name;
    document.getElementById("daerah").innerHTML = SingaBarong.daerah;
    document.getElementById("deskripsi").innerHTML = SingaBarong.desc;
    batikModal.style.display = "block";
}
function SekarJagad(batikModal) {
    let SekarJagad = listBatik[10];
    document.getElementById("gambar").src = SekarJagad.img;
    document.getElementById("nama-batik").innerHTML = SekarJagad.name;
    document.getElementById("daerah").innerHTML = SekarJagad.daerah;
    document.getElementById("deskripsi").innerHTML = SekarJagad.desc;
    batikModal.style.display = "block";
}
function JagatanPisang(batikModal) {
    let JagatanPisang = listBatik[11];
    document.getElementById("gambar").src = JagatanPisang.img;
    document.getElementById("nama-batik").innerHTML = JagatanPisang.name;
    document.getElementById("daerah").innerHTML = JagatanPisang.daerah;
    document.getElementById("deskripsi").innerHTML = JagatanPisang.desc;
    batikModal.style.display = "block";
}
function Priyangan(batikModal) {
    let Priyangan = listBatik[12];
    document.getElementById("gambar").src = Priyangan.img;
    document.getElementById("nama-batik").innerHTML = Priyangan.name;
    document.getElementById("daerah").innerHTML = Priyangan.daerah;
    document.getElementById("deskripsi").innerHTML = Priyangan.desc;
    batikModal.style.display = "block";
}
function Garutan(batikModal) {
    let Garutan = listBatik[13];
    document.getElementById("gambar").src = Garutan.img;
    document.getElementById("nama-batik").innerHTML = Garutan.name;
    document.getElementById("daerah").innerHTML = Garutan.daerah;
    document.getElementById("deskripsi").innerHTML = Garutan.desc;
    batikModal.style.display = "block";
}
function Tubo(batikModal) {
    let Tubo = listBatik[14];
    document.getElementById("gambar").src = Tubo.img;
    document.getElementById("nama-batik").innerHTML = Tubo.name;
    document.getElementById("daerah").innerHTML = Tubo.daerah;
    document.getElementById("deskripsi").innerHTML = Tubo.desc;
    batikModal.style.display = "block";
}
span.onclick = function() {
  batikModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == batikModal) {
    batikModal.style.display = "none";
  }
}

<!-- search -->
function searchbatik() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchitem');
  filter = input.value.toUpperCase();
  ul = document.getElementById("list-batik");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function hyperlink(){
	document.body.addEventListener("click", function (event) {
		window.location.replace("explore.html");
    if (event.key === "Enter") {
        window.location.replace("explore.html");
    }
});
}

