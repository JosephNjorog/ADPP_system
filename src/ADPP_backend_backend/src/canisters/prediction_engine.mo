import Array "mo:base/Array";
import Float "mo:base/Float";

actor PredictionEngine {
    type DataPoint = {
        features: [Float];
        label: Float;
    };

    var model: [Float] = [];

    public func trainModel(data: [DataPoint]) : async () {
        // Implement a simple linear regression model
        let X = Array.map<DataPoint, [Float]>(data, func(dp) { dp.features });
        let y = Array.map<DataPoint, Float>(data, func(dp) { dp.label });
        
        model := gradientDescent(X, y, 0.01, 1000);
    }

    public func predict(features: [Float]) : async Float {
        var prediction: Float = 0;
        for (i in model.keys()) {
            prediction += model[i] * features[i];
        };
        prediction
    }

    private func gradientDescent(X: [[Float]], y: [Float], learningRate: Float, iterations: Nat) : [Float] {
        var weights = Array.tabulate<Float>(X[0].size(), func(_) { 0 });
        
        for (_ in Iter.range(0, iterations - 1)) {
            let predictions = Array.map<[Float], Float>(X, func(x) {
                Array.foldLeft<Float, Float>(Array.zipWith<Float, Float, Float>(x, weights, Float.mul), 0, Float.add)
            });
            
            let errors = Array.zipWith<Float, Float, Float>(predictions, y, Float.sub);
            
            let gradients = Array.map<[Float], [Float]>(X, func(x) {
                Array.map<Float, Float>(x, func(xi) { xi * errors[0] })
            });
            
            weights := Array.zipWith<Float, Float, Float>(weights, Array.map<[Float], Float>(gradients, Array.sum), func(w, g) { w - learningRate * g });
        };
        
        weights
    }
}