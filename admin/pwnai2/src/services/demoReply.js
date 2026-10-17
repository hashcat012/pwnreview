export function demoReply(text, model) {
  const q = text.toLocaleLowerCase('tr');
  let answer;
  if (/react|kod|web|erişilebilir/.test(q)) {
    answer = 'Sağlam bir başlangıç için projeyi üç katmana ayır:\n\n1. Görünüm: Küçük, tek sorumluluklu React bileşenleri.\n2. İş mantığı: Tekrar kullanılabilir özel hook’lar.\n3. Veri: API çağrıları ve doğrulama için ayrı servisler.\n\nForm alanlarını etiketle, klavye ile gezinmeyi destekle ve kullanıcıya yüklenme, hata ve boş durumlarını açıkça göster. Gizli API anahtarlarını istemci koduna koyma.';
  } else if (/öğren|zekâ|prensip|beceri/.test(q)) {
    answer = 'Öğrenmeyi küçük ve ölçülebilir adımlara bölelim.\n\n1. hafta → Temel kavramları tanı ve her gün 20 dakika çalış.\n2. hafta → Küçük örnekleri kendin uygula.\n3. hafta → Gerçek bir mini proje tamamla.\n4. hafta → Öğrendiklerini başka birine anlat ve eksiklerini tekrar et.\n\nYapay zekâ da verilerdeki örüntüleri kullanarak tahmin yapmayı öğrenir. Bu süreç insan gibi anlamakla aynı şey değildir; bu nedenle sonuçları kontrol etmek önemlidir.';
  } else if (/fikir|uygulama|ürün|içerik/.test(q)) {
    answer = 'İşte geliştirmeye değer beş başlangıç noktası:\n\n• Odak defteri — Notları günün tek bir önceliğine bağlar.\n• Kiler rehberi — Evdeki malzemelerle yemek seçenekleri sunar.\n• Mikro öğrenme — Her gün beş dakikalık kişisel çalışma oturumu.\n• Mahalle paylaşımı — Az kullanılan eşyaları komşularla paylaşma.\n• Sessiz takvim — Yoğunluk yerine dinlenme aralıklarını planlama.\n\nİlk sürümde tek bir problemi seç. Üç potansiyel kullanıcıyla görüş, küçük bir prototip yap ve geri bildirim topla.';
  } else if (/yaz|metin|marka|posta|hikâye/.test(q)) {
    answer = 'İyi fikirler, kendilerine alan açıldığında büyür.\n\nBiz karmaşık olanı sadeleştirmek, günlük işlerinizi hafifletmek ve gerçekten önemli olana daha fazla zaman bırakmak için buradayız.\n\nDaha az gürültü. Daha çok odak.\nBir sonraki adımı birlikte atalım.\n\nBu örnek metni hedef kitle, marka sesi ve kullanım kanalına göre özelleştirebilirsin.';
  } else {
    answer = `“${text.slice(0, 180)}” konusunu netleştirmek için hedefini, mevcut durumunu ve istediğin çıktı biçimini birlikte belirleyebiliriz.\n\nÖrneğin: “Yeni başlayanlar için, 5 maddelik bir plan hazırla.”\n\nBu arayüz yerel bir demodur; serbest biçimli gerçek model yanıtları için güvenli bir sunucu API bağlantısı gerekir. Keşfet bölümündeki örneklerle sohbet deneyimini deneyebilirsin.`;
  }
  return `${answer}\n\n— ${model} · Yerel demo yanıtı`;
}