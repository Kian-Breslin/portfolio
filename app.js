const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")


navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible")

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
    }
})

// ----------------------------------------------------- //


function isPythagoreanTriple(nums) {
    
    let hn = nums.sort(function(a, b){return a-b})
    
    if ((hn[0]**2) + hn[1]**2 === hn[2]**2) {
      return true
    } else {
      return false
    }
    
    
}

function isPythagoreanTriple2(n1,n2,n3) {
    let numbers = [n1,n2,n3]
    
    let hn = numbers.sort(function(a, b){return a-b})
    
    return (hn[0]**2) + hn[1]**2 === hn[2]**2
  }

  function test(integers) {
    let massiv = integers.sort((a, b) => a - b)
    return (massiv[0] ** 2 + massiv[1] ** 2 == massiv[2] ** 2)
  }
