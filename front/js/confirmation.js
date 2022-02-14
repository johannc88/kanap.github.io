const orderId = getOrderId()
displayOrderId(orderId)
removeAllCache()

// obtenir id commande
function getOrderId() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  return urlParams.get("orderId")
}

// afficher id commande
function displayOrderId(orderId) {
  const orderIdElement = document.getElementById("orderId")
  orderIdElement.textContent = orderId
}

//supprimer tout le cache 
function removeAllCache() {
  const cache = window.localStorage
  cache.clear()
}
