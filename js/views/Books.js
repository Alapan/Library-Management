import Base from './Base';

const Books = Base.extend({
  template: _.template(`
    <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Book</th>
        <th>Author</th>
        <th></th>
      </tr>
    </thead>
    <tbody id="bookList"></tbody>
  </table>
  `);
});

export default Books;
