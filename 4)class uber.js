//4)write a class to calculate uber price.
class UberPrice {
  constructor(inputVehicle, inputKm, inputPostRideFare = 30) {
    this.pricePerKmInRs = 50;
    this.vehicleType = inputVehicle;
    this.distanceTravelled = inputKm;
    this.postRidePricePerKm = inputPostRideFare;
  }

  calculateUpfrontPrice() {
    if (
      prompt("check if the demand for the vehicle high in the area Y or N") ==
      "Y" //checking if there is high demand for vehicle
    ) {
      console.log(
        //in case of high demand price per km will increase
        "as there is high demand for the vehicle in the area increasing the pricePerKmInRs value"
      );
      this.pricePerKmInRs = 55;
      let baseFare = this.distanceTravelled * this.pricePerKmInRs; //calculation base fare by simple multiplication
      if (
        prompt(
          //checking if any detour happened
          "please say if any detour happened or travelled extra distance in Y or N"
        ) == "Y"
      ) {
        console.log("calculating detour fare"); //as detour has happened calculating detour price
        let detourKm = +prompt("how many km detour has been taken?"); //taking input from applicaition for detour km and converting string to number
        let detourFare = this.calculateDetourPrice(detourKm); //calling another function of class using this to calculation detour fare using the values we collated
        let finalFare = baseFare + detourFare; //final fare is resultant of base and detour fare
        console.log(`final fare calculate for the ride is: ${finalFare}`);
      } else {
        console.log("no detour happened");
        let finalFare = baseFare; //in the base fare the tax is also considered
        console.log(`final fare calculate for the ride is: ${finalFare}`); //displaying the final fare
      }
    } else {
      //this is the case of not having high demand for the ride
      let baseFare = this.distanceTravelled * this.pricePerKmInRs;
      if (
        prompt(
          "please say if any detour happened or travelled extra distance in Y or N"
        ) == "Y"
      ) {
        console.log("calculating detour fare");
        let detourKm = +prompt("how many km detour has been taken?");
        let detourFare = calculateDetourPrice(detourKm);
        let finalFare = baseFare + detourFare;
        console.log(`final fare calculate for the ride is: ${finalFare}`);
      } else {
        console.log("no detour happened");
        let finalFare = baseFare; //in the base fare the tax is also considered
        console.log(`final fare calculate for the ride is: ${finalFare}`);
      }
    }
  }

  calculatePostTripPrice() {
    let finalFarePost = this.postRidePricePerKm * this.distanceTravelled; //post fare calculation using distance and postfare price
    console.log(
      `final fare for post trip price for the ride is: ${finalFarePost}`
    );
  }

  calculateDetourPrice(inputDetourKm) {
    return inputDetourKm * this.pricePerKmInRs; //detour fare calculated and returned
  }
}

const fare1 = new UberPrice("sedan", 20);
const fare2 = new UberPrice("auto", 25, 40);

fare1.calculateUpfrontPrice(); //fare1
fare2.calculatePostTripPrice(); //fare2


