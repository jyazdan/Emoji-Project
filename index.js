const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const emojiInput = document.getElementById("emoji-input")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
  if (emojiInput.value) {
    myEmojis.unshift(emojiInput.value)
    emojiInput.value = ""
    renderEmojis()
}
})

popBtn.addEventListener("click", function(){
  if (myEmojis){
    myEmojis.pop()
    renderEmojis()
  }
})

shiftBtn.addEventListener("click", function(){
  if (myEmojis){
    myEmojis.shift()
    renderEmojis()
  }
})
