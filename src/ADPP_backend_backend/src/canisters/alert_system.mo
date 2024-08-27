import Array "mo:base/Array";
import Float "mo:base/Float";
import Time "mo:base/Time";

actor AlertSystem {
    type Alert = {
        id: Nat;
        message: Text;
        severity: Nat;
        timestamp: Int;
    };

    var alerts: [Alert] = [];
    var nextAlertId: Nat = 0;

    public func createAlert(message: Text, severity: Nat) : async Nat {
        let alert: Alert = {
            id = nextAlertId;
            message = message;
            severity = severity;
            timestamp = Time.now();
        };
        alerts := Array.append(alerts, [alert]);
        nextAlertId += 1;
        nextAlertId - 1
    }

    public query func getAlerts() : async [Alert] {
        alerts
    }

    public query func getAlertById(id: Nat) : async ?Alert {
        Array.find<Alert>(alerts, func(a) { a.id == id })
    }

    public func updateAlert(id: Nat, message: Text, severity: Nat) : async Bool {
        alerts := Array.map<Alert, Alert>(alerts, func(a) {
            if (a.id == id) {
                {
                    id = a.id;
                    message = message;
                    severity = severity;
                    timestamp = Time.now();
                }
            } else {
                a
            }
        });
        true
    }

    public func deleteAlert(id: Nat) : async Bool {
        let initialLength = alerts.size();
        alerts := Array.filter<Alert>(alerts, func(a) { a.id != id });
        alerts.size() < initialLength
    }
}