// responsible for doing all of our database calls

const repo = function() {
  const db = {};
  function get(id) {
    console.log(`Getting task ${id}`);
    return {
      name: 'new task from db',
    };
  }

  function save(task) {
    console.log(`Saving ${task.name} to the db`);
  }
  return {
    get: get,
    save: save,
  };
};

module.exports = repo;

// we are exporting the return section of our repo function
