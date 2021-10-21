import { selectItems, selectTotal } from "../slices/basketSlice";
import { useSelector } from "react-redux";
import WinkelwagenItem from "../components/winkelwagen/WinkelwagenItem";

function winkelwagen() {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <div>
      <h1 className="text-3xl">
        {items.length === 0 ? "Je Winkelwagen is leeg." : "Winkelwagen"}
      </h1>
      {items.length ? (
        <div>
          <ul>
            {items.map((item, i) => (
              <WinkelwagenItem
                key={i}
                title={item.title}
                images={item.images}
                price={item.price}
              />
            ))}
          </ul>
          <div className="text-white max-w-md text-xs cursor-pointer bg-blue-700 rounded-full p-2 px-4">
            <div>
              <p className="hidden md:inline font-bold md:text-sm">Checkout</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Geen producten</p>
      )}

      {/* {items.map((item, i) => (
        <WinkelwagenItem
          key={i}
          id={item.id}
          name={item.name}
          price={item.price}
          description={item.description}
          category={item.category}
          image={item.image}
          slug={item.slug}
        />
      ))} */}
    </div>
  );
}

export default winkelwagen;
