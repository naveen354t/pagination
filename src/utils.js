const paginate = (followers) => {
  const itemsPerPage = 10;
  const nuberOfPages = Math.ceil(followers.length / itemsPerPage);
  const newFollowers = Array.from({ length: nuberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return followers.slice(start, start + itemsPerPage);
  });
    return newFollowers
};
export default paginate
