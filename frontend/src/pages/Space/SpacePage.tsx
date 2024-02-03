import SpaceImageRow from "./SpaceImageRow";

const SpacePage = () => {
  const spaceData = {
    name: "Space 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id accumsan leo. Suspendisse potenti. Suspendisse auctor hendrerit tempus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ",
  };

  return (
    <>
      <div style={{ width: "100vw", height: "calc(100vh-40px)" }}>
        <div className="flex flex-row">
          <div className="" style={{ width: "calc(100vw * 0.65)" }}>
            <div className="px-4 pt-2">
              <div className="flex flex-col">
                <div className="text-7xl py-4">{spaceData.name}</div>
                <div className="text-1xl">{spaceData.description}</div>
                <div className="mt-4">
                  <SpaceImageRow />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100/20"></div>
        </div>
      </div>
    </>
  );
};

export default SpacePage;