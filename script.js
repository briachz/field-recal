function toggleFaq(el) {
var item = el.closest(’.faq-item’);
var open = item.classList.contains(‘open’);
document.querySelectorAll(’.faq-item.open’).forEach(function(i){ i.classList.remove(‘open’); });
if (!open) item.classList.add(‘open’);
}