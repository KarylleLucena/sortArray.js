function addMatrices(matrix1, matrix2) {
    // Check if matrices have the same dimensions
    if (matrix1.length !== matrix2.length || matrix1[0].length !== matrix2[0].length) {
        console.log("Matrices must have the same dimensions.");
        return null;
    }

    // Add matrices
    let result = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row = [];
        for (let j = 0; j < matrix1[0].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }

    return result;
}

// Example usage:
let matrixA = [[1, 2], [3, 4]];
let matrixB = [[5, 6], [7, 8]];
let sumMatrix = addMatrices(matrixA, matrixB);

if (sumMatrix) {
    console.log("Sum of matrices:", sumMatrix);
          }
