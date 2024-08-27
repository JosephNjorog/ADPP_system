import Array "mo:base/Array";
import Float "mo:base/Float";

actor DataPreprocessing {
    public func normalizeData(data: [Float]) : async [Float] {
        let max = Array.foldLeft<Float, Float>(data, 0, Float.max);
        let min = Array.foldLeft<Float, Float>(data, Float.maxValue, Float.min);
        
        Array.map<Float, Float>(data, func(x) {
            (x - min) / (max - min)
        })
    }

    public func removeOutliers(data: [Float], threshold: Float) : async [Float] {
        let mean = calculateMean(data);
        let std = calculateStandardDeviation(data, mean);
        
        Array.filter<Float>(data, func(x) {
            let zScore = (x - mean) / std;
            Float.abs(zScore) <= threshold
        })
    }

    private func calculateMean(data: [Float]) : Float {
        let sum = Array.foldLeft<Float, Float>(data, 0, Float.add);
        sum / Float.fromInt(data.size())
    }

    private func calculateStandardDeviation(data: [Float], mean: Float) : Float {
        let varianceSum = Array.foldLeft<Float, Float>(data, 0, func(acc, x) {
            acc + (x - mean) ** 2
        });
        let variance = varianceSum / Float.fromInt(data.size());
        Float.sqrt(variance)
    }
}