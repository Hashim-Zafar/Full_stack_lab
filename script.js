const projects = {
  web: { title: 'Campus Connect', description: 'A web development project that brings campus announcements and events into one responsive interface.', features: ['Semantic HTML and accessible navigation', 'Responsive layouts using CSS Flexbox', 'Interactive components with JavaScript'] },
  database: { title: 'Student Record System', description: 'A database project that models students, courses, and enrollments with organized, related records.', features: ['Entity relationship diagrams and table design', 'Primary keys and foreign key relationships', 'SQL queries for enrollment and course reports'] },
  ai: { title: 'Sentiment Explorer', description: 'An AI/ML project that explores classifying short text as positive, negative, or neutral.', features: ['Text cleaning and feature extraction', 'Training a classification model with Scikit-learn', 'Evaluating predictions with a held-out test set'] }
};
const dialog = document.querySelector('#project-dialog');
document.querySelectorAll('[data-project]').forEach(button => {
  button.addEventListener('click', () => {
    const project = projects[button.dataset.project];
    document.querySelector('#dialog-title').textContent = project.title;
    document.querySelector('#dialog-description').textContent = project.description;
    document.querySelector('#dialog-features').replaceChildren(...project.features.map(feature => {
      const item = document.createElement('li');
      item.textContent = feature;
      return item;
    }));
    dialog.showModal();
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
