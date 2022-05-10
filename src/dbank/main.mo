import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor DBankk {

  // vars
  stable var balance: Float = 0;
  // balance := 300;

  stable var start = Time.now();
  // start := Time.now();
  
  Debug.print(debug_show(start));



  // update methods
  public func addAmount(amount: Float) {
    balance += amount;
    Debug.print(debug_show(balance));
  };

  public func withdrawlAmount(amount: Float) {
    let tmp: Float = balance - amount;
    if (tmp >= 0) {
      balance -= amount;
      Debug.print(debug_show(balance));
    } else {
      Debug.print("amount greater than zero");
    }
  };


  // query methods
  public query func checkBalance(): async Float {
    return balance;
  };

  public func compound() {

    let currentTime = Time.now();
    let timeElapsedNS = currentTime - start;
    let timeElapsedS = timeElapsedNS / 1000000000;
    balance := balance * (1.01 ** Float.fromInt(timeElapsedS));
    start := currentTime;
  };
}