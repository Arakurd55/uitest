import Card from "../src/components/card";

const items = [
  {
    name: "Dog Man Bar",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww",
    avatar:
      "https://images.unsplash.com/photo-1663520003211-b17be69172eb?q=80&w=2836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Hevar Ramon",
  },
  {
    name: "Cat In The Bank",
    image:
      "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?q=80&w=2756&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar:
      "https://images.unsplash.com/photo-1663670761152-3b9f3edfdefc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Rasha Govar",
  },
  {
    name: "Cat In The Bank",
    image:
      "https://plus.unsplash.com/premium_photo-1672759267829-17e48ef96660?q=80&w=2801&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    avatar:
      "https://images.unsplash.com/photo-1663670761152-3b9f3edfdefc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Rasha Govar",
  },
  {
    name: "Cat In The Bank",
    image:
      "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nfGVufDB8fDB8fHww",
    avatar:
      "https://images.unsplash.com/photo-1663670761152-3b9f3edfdefc?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    username: "Rasha Govar",
  },
];
export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-10 px-4 py-4 sm:grid-cols-2 md:grid-cols-3 bg-stone-50">
      {items.map((item, index) => (
        <Card
          key={index}
          name={item.name}
          image={item.image}
          username={item.username}
          avatar={item.avatar}
        />
      ))}
    </div>
  );
}
