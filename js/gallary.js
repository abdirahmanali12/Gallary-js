const mainView = document.querySelector("#main-image");
const imageContainer = document.querySelector(".images-container");
const [left, right] = document.querySelectorAll(".controlles");

left.addEventListener("click", () => {
  const activeImage = document.querySelector(".active-image");
  const { isFirsChild, posision } = getElementInfo(activeImage.parentElement);
  if (isFirsChild) return;
  activeImage.classList.remove("active-image");
  const nextLeftImageContainer = imageContainer.children.item(posision - 1);
  nextLeftImageContainer.lastElementChild.classList.add("active-image");
  mainView.src = nextLeftImageContainer.firstElementChild.src;
});

right.addEventListener("click", () => {
  const activeImage = document.querySelector(".active-image");
  const { isLastChild, posision } = getElementInfo(activeImage.parentElement);
  if (isLastChild) return;
  activeImage.classList.remove("active-image");
  const nextLeftImageContainer = imageContainer.children.item(posision + 1);
  nextLeftImageContainer.lastElementChild.classList.add("active-image");
  mainView.src = nextLeftImageContainer.firstElementChild.src;
});

const getElementInfo = (child) => {
  const parent = child.parentElement;
  const children = parent.children;
  const elementInfo = {
    isFirsChild: false,
    posision: -1,
    isLastChild: false,
  };

  for (let index = 0; index < children.length; index++)
    if (child.isEqualNode(children.item(index))) {
      elementInfo.isFirsChild = !Boolean(index);
      elementInfo.posision = index;
      elementInfo.isLastChild = index == children.length - 1;
    }

  return elementInfo;
};
