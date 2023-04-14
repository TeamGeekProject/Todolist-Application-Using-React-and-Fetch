const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      todoListItems: [],
      user: "teamgeekuser",
      isActivated: false,
    },
    actions: {
      // Use getActions to call a function within a fuction
      // exampleFunction: () => {
      // 	getActions().changeColor(0, "green");
      // },
      loadSomeData: async () => {
        const store = getStore();
        const user = store.user;
        const response = await fetch(
          `http://assets.breatheco.de/apis/fake/todos/user/${user}`
        );
        const data = await response.json();

        setStore({ todoListItems: data });
      },

      deleteTodoListItem: async (index) => {
        const store = getStore();
        const user = store.user;
        const todoListItems = store.todoListItems.filter(
          (item, i) => i !== index
        );

        if (todoListItems.length === 0) {
          await fetch(
            `https://assets.breatheco.de/apis/fake/todos/user/${user}`,
            {
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then(setStore({ todoListItems: [] }))
            .catch((error) => console.log(error));

          setStore({ isActivated: false });
        } else {
          await fetch(
            `https://assets.breatheco.de/apis/fake/todos/user/${user}`,
            {
              method: "PUT",
              body: JSON.stringify(todoListItems),
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
            .then(setStore({ todoListItems: todoListItems }))
            .catch((error) => console.log(error));
        }
      },

      addTodoListItem: async (item) => {
        const store = getStore();
        const user = store.user;
        const todoListItems = store.todoListItems.concat({
          label: item,
          done: false,
        });
        console.log(todoListItems);

        await fetch(
          `https://assets.breatheco.de/apis/fake/todos/user/${user}`,
          {
            method: "PUT",
            body: JSON.stringify(todoListItems),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(setStore({ todoListItems: todoListItems }))
          .catch((error) => console.log(error));
        // setStore({ todoListItems: todoListItems });
      },
      deleteAll: async () => {
        const store = getStore();
        const user = store.user;
        await fetch(
          `https://assets.breatheco.de/apis/fake/todos/user/${user}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(setStore({ todoListItems: [] }))
          .catch((error) => console.log(error));

        setStore({ isActivated: false });
      },

      createUser: async () => {
        const store = getStore();
        const user = store.user;
        await fetch(
          "https://assets.breatheco.de/apis/fake/todos/user/" + user,
          {
            method: "POST",
            body: JSON.stringify([]),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then(setStore({ isActivated: true }))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
