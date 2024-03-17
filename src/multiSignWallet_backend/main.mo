import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Principal "mo:base/Principal";
import Array "mo:base/Array";

type Transfer = {
  id: Nat;
  amount: Nat;
  to: Principal;
  approvals: Nat;
  sent: Bool;
};

actor Wallet {
  var approvers : [Principal] = []; 
  var transfers : [Transfer] = [];
  var quorum : Nat = 0;

  public shared({caller}) func init(_approvers: [Principal], _quorum: Nat) {
    approvers := _approvers;
    quorum := _quorum;
  };

  public func getApprovers() : async [Principal] {
    return approvers;
  };

  public func getTransfers() : async [Transfer] {
    return transfers;
  };

  public func createTransfer(amount: Nat, to: Principal) : async () {
    if (await isApprover()) {
      let id = Array.length(transfers);
      let transfer = {id = id; amount = amount; to = to; approvals = 0; sent = false;};
      transfers := transfers # [transfer];
    } else {
      Debug.print("Only approved users can access");
    }
  };

  public func approveTransfer(id: Nat) : async () {
    if (await isApprover()) {
      if (id < Array.length(transfers)) {
        assert(transfers[id].sent == false, "Already sent!");
        transfers[id].approvals += 1;
        if (transfers[id].approvals >= quorum) {
          transfers[id].sent := true;
          // Simulate transfer or update state
        }
      } else {
        Debug.print("Invalid transfer ID");
      }
    } else {
      Debug.print("Only approved users can access");
    }
  };

  public query func isApprover( ) : async Bool {
  let sender = Principal.fromActor(this);
  var isApprover = false;
  var index : Int = 0;
  while (index < Array.length(approvers)) {
    if (approvers[index] == sender) {
      isApprover := true;
     
    } ;
    index := index +  1 ;
  } ;
  return isApprover ; 
  
};


  public query func _accept() : async () { await accept(null) };
};