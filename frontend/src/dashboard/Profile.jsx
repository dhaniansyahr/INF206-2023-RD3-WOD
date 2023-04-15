export default function Profile() {
  return (
    <div className="flex items-center h-[50px] m-w-[190px] py-0 pr-[15px] pl-[16px]">
      {newFunction()}
      <h1 class="text-[15px] font-medium text-white my-0 mx-[10px]">Iwan</h1>
    </div>
  );
}
function newFunction() {
  return <img
    src="images/profile.jpg"
    className="h-[40px] w-[40px] object-cover rounded-full"
    alt="" />;
}

