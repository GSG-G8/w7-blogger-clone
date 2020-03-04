/* eslint-disable*/
const connection = require('../server/Database/config/connection');
const { dbBuild } = require('../server/Database/config/build');
const getPosts = require('../server/Database/query/getPosts');
const addPosts = require('../server/Database/query/addPosts');

beforeAll(() => dbBuild());

afterAll(() => connection.end());

test('test getPosts query', () => getPosts()
  .then((data) => {
    const actual = data.rows[0];
    const expected = {
      id: 1,
      name: "post title name 1",
      image: "https://via.placeholder.com/300",
      description: "lorem ipsum lorem ipsum",
      user_id: null
    };
    expect(actual).toEqual(expected);
  }));

  test('test add posts', () => {
    const data = {
      name: "post title name 5",
      image: "https://via.placeholder.com/300",
      description: "lorem ipsum lorem ipsum"
    };

    const expected = "post title name 5";

    return addPosts(data).then((res) => {
      const actual = res.rows[0].name;
      expect(actual).toEqual(expected);
    });
  });
  