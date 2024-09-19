export const sortMoviesByYearAndTitle = movies => {
  return [...movies].sort((a, b) => {
    if (b.releaseYear !== a.releaseYear) {
      return b.releaseYear - a.releaseYear;
    }
    return a.title.localeCompare(b.title);
  });
};
