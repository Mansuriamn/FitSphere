import React from 'react'
import './Table.css'
export default function Table() {
  return (
   <>
   <div class="table-container">
  <h3>Here’s your gym-friendly meal plan :</h3>
  <br></br>
  
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Time</th>
                    <th>Meal</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Morning (Pre-Workout/Breakfast)</td>
                    <td>
                      - Oatmeal with nuts, fruits, and chia seeds
                      <br></br>
                      - Boiled eggs (2)
                      <br></br>
                      - Herbal tea or black coffee
                    </td>
                    <td>
                      - Banana peanut butter toast
                      <br></br>
                      - Greek yogurt (unsweetened)
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mid-Morning Snack (Post-Workout)</td>
                    <td>- Protein smoothie: Protein powder, almond milk, spinach, and berries</td>
                    <td>
                      - Boiled egg
                      <br></br>
                      - Handful of roasted chickpeas
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Lunch</td>
                    <td>
                      - Grilled chicken/paneer (100–150g)
                      <br></br>
                      - Brown rice or quinoa (1 cup)
                      <br></br>
                      - Steamed veggies (broccoli, carrots, etc.)
                      <br></br>
                      - Curd
                    </td>
                    <td>
                      - Lentil soup with whole-grain roti
                      <br></br>
                      - Side salad (cucumber, tomato, lemon juice)
                    </td>
                </tr>
                 <tr>
                    <td>4</td>
                    <td>Afternoon Snack</td>
                    <td>
                      - Roasted nuts/seeds (almonds, walnuts, pumpkin seeds)
                      <br></br>
                      - Seasonal fruit (apple, orange)
                      <br></br>
                      - Coconut water
                    </td>
                    <td> </td>
                </tr>
                 <tr>
                    <td>5</td>
                    <td>Evening Snack (Pre-Workout)</td>
                    <td>- Sprouts salad: Lentils, onions, tomatoes, lemon juice</td>
                    <td>- Masala sweet potato: Steamed, with chaat masala and lemon juice</td>
                </tr>
                 <tr>
                    <td>6</td>
                    <td>Dinner</td>
                    <td>
                      - Grilled fish/tofu (100–150g)
                      <br></br>
                      - Millet roti (1–2)
                      <br></br>
                      - Sauteed spinach or other leafy greens
                    </td>
                    <td>
                      - Vegetable stir-fry with tofu/paneer
                      <br></br>
                      - Quinoa or brown rice (1 cup)
                    </td>
                </tr>
                 <tr>
                    <td>7</td>
                    <td>Night Snack (Optional)</td>
                    <td>
                      - Warm low-fat milk with turmeric
                      <br></br>
                      - Handful of nuts or small fruit
                    </td>
                    <td></td>
                </tr>
                 <tr>
                    <td>8</td>
                    <td>Hydration</td>
                    <td>Drink 2.5–3 liters of water daily
Natural electrolytes like coconut water or lemon water</td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
   </>
  )
}
