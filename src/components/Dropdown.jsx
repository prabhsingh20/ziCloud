function Dropdown() {
  return (
    <section className="my-12 flex cursor-pointer flex-wrap items-center text-lg font-medium text-secondary">
      <span className="material-symbols-outlined">home</span>
      <span className="material-symbols-outlined text-main">chevron_right</span>
      <p>Flashcard</p>
      <span className="material-symbols-outlined text-main">chevron_right</span>
      <p>Mathematics</p>
      <span className="material-symbols-outlined text-main">chevron_right</span>
      <p className="font-semibold text-main">Relation and Function</p>
    </section>
  );
}

export default Dropdown;
