function Dropdown() {
  return (
    <section className="text-secondary mb-10 mt-12 flex cursor-pointer items-center text-lg font-medium">
      <span className="material-symbols-outlined">home</span>
      <span className="material-symbols-outlined text-main">chevron_right</span>
      <p>Flashcard</p>
      <span className="material-symbols-outlined text-main">chevron_right</span>
      <p>Mathematics</p>
      <span className="material-symbols-outlined text-main">chevron_right</span>
      <p className="text-main font-semibold">Relation and Function</p>
    </section>
  );
}

export default Dropdown;
