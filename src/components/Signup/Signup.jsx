import "./Signup.css"

const Signup = () => { 
    return (
        <>
        <h1>Sign up</h1>
        <input type="text" />
        <input type="email" />
        <input type="password" />
        <input type="number" />
        <input type="text" />
        <label for="trait">Choose a trait:</label>
        <select name="trait" id="trait">
            <option value="autism">Autism</option>
            <option value="adhd">ADHD</option>
            <option value="dyslexia">Dyslexia</option>
            <option value="dyscalculia">Dyscalculia</option>
            <option value="epilepsy">Epilepsy</option>
            <option value="dysprexia">Dysprexia</option>
            <option value="down_syndrome">Down Syndrome</option>
            <option value="tourette_syndrome">Tourette Syndrome</option>
            <option value="bipolar_disorder">Bipolar Disorder</option>
            <option value="Other">Other</option>
        </select>
        <p> Already have an account? Sign up!</p>
        </>
    )
}

export default Signup