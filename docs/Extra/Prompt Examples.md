# Prompt Examples

## GitHub Copilot

### CLI

```bash
$ gh copilot explain "sudo apt-get"   # Explain a command
$ gh copilot suggest "Undo the last commit"   # Suggest a command
```	

### IDE

**general software questions**
`tell me about python frameworks`
`Step by step tutorial on how to setting up jwt authentification on django`
`how to create an express app`
`@terminal how to update an npm package`
**questions about a project**
- Use the @workspace chat participant
`@workspace how are notifications scheduled`
- Use chat variables like #selection, #file, #editor, #codebase, or #git
`#file:gameReducer.js #file:gameInit.js how are these files related` 
**set up a new project**
- Use the /new slash command to set up a new project
`/new react app with typescript`
`/new python django web application`
`/new node.js express server`
-Use the /fix slash command to fix errors in code
`/fix this code has a syntax error`
`/fix this code has a bug`
- Make general requests to improve or refactor  code
`make this code more efficient`
`how would you improve this code?`
`add error handling to this function`
`translate this code to C#`
`refactor this code to use a different design pattern`
- Use the /tests slash command to write tests for a function
`/tests for the add function`
`/tests using the Jest framework`
`/tests ensure the function rejects an empty list`
- Use the @vscode chat participant to ask specific questions about VS Code
`@vscode tell me how to debug a node.js app`
`@vscode how do I change my Visual Studio Code colors`
`@vscode how can I change key bindings`
- Use the @terminal chat participant to ask specific questions about the command line:
`@terminal find the largest file in the src directory`
`@terminal #terminalLastCommand to explain the last command and any errors`
- Debugging
```bash
$ copilot-debug file_name   # Debug a file
```


## Choose LLMs for Copilot

1. **Reasoning & accuracy** (how deep/logical the model’s code understanding is)  
2. **Context window** (how much code or discussion it can see at once)  
3. **Latency & cost** (how fast it responds and roughly how much it costs per token)  
4. **Specialized “style” or creativity** (e.g. conversational tone, creative naming, etc.)

Below is a quick‑reference matrix, then some task‑based guidance.


| Model                        | Reasoning & Accuracy | Context Window  | Latency/Cost   | “Flavor” / Notes                        |
|------------------------------|----------------------|-----------------|----------------|-----------------------------------------|
| **GPT‑4.1 (Preview)**        | ★★★★★ (top tier)     | up to ~128K†    | High / $$$     | Best for deep design, multi‑file refactors, architectural suggestions. |
| **GPT‑4.0**                  | ★★★★☆               | ~32K            | Medium‑High    | Very strong general code tasks; slightly lower cost than 4.1. |
| **Claude 3.7 Sonnet**        | ★★★★☆               | ~100K           | Medium‑High    | Great “thoughtful” explanations, doc‑style code reviews.            |
| **Gemini 2.5 Pro (Preview)** | ★★★★☆               | ~64K            | Medium‑High    | Strong on multi‑modal / examples; good for exploratory tasks.       |
| **o4‑mini (Preview)**        | ★★★☆☆               | ~16K            | Medium         | Good balance of speed + capability for most day‑to‑day coding.      |
| **o3‑mini**                  | ★★☆☆☆               | ~8K             | Low‑Medium     | Fast, cheap; ok for trivial snippets, simple helpers.               |
| **o1 (Preview)**             | ★★★☆☆               | ~16K            | Low‑Medium     | “Base” GPT‑like: reliable for straightforward completion tasks.     |


## 📌 Task‑by‑Task Recommendations

### 1. **High‑Complexity Design & Refactoring**  
- **Use:** GPT‑4.1 Preview or GPT‑4.0  
- **Why:** The extra reasoning headroom + large context lets you rearchitect modules, understand cross‑file dependencies, and generate detailed design docs.

### 2. **Deep Explanations & Code Reviews**  
- **Use:** Claude 3.7 Sonnet or Gemini 2.5 Pro  
- **Why:** They specialize in “thinking aloud,” offering bullet–point feedback, high‑level suggestions, and contextual examples.

### 3. **Multi‑File or Long‑Context Workflows**  
- **Use:** GPT‑4.1 (128K window) or Claude 3.7 Sonnet (100K window)  
- **Why:** When you want the model to see an entire repo or large code dump in a single prompt.

### 4. **Everyday Autocompletion & Snippets**  
- **Use:** o4‑mini (Preview)  
- **Why:** Strikes the best balance of speed, cost, and adequacy for routine helper functions, CRUD scaffolding, or small algorithmic snippets.

### 5. **Ultra‑Fast, Low‑Cost Helpers**  
- **Use:** o3‑mini  
- **Why:** Tiny tasks—e.g. regex helpers, single‑function stubs—don’t need heavyweight reasoning engines.

### 6. **Prototype Chatbots & Conversational Agents**  
- **Use:** Gemini 2.5 Pro or Claude 3.7 Sonnet  
- **Why:** Both excel at dialogue flow, maintaining persona, and handling turn‑by‑turn context.

### 7. **Creative Naming, Documentation, Blogposts**  
- **Use:** GPT‑4.1 or GPT‑4.0 for depth; Claude Sonnet for style  
- **Why:** You get richer vocabulary, varied tone, and can ask for iterative style tweaks.


## ⚖️ Putting It All Together

1. **Map your task** → high‑complexity? long context? creative?  
2. **Scan the matrix** above for the few models that match your needs.  
3. **Try a quick benchmark**: give each candidate a small representative prompt and compare output quality, speed, and cost.  
4. **Lock in**, but stay flexible—your next project might demand a different balance!


## Some common words to use in prompts

*enhance contrast, improve readability, ensure consistency, add responsiveness, implement best practices, optimize performance, streamline workflow, simplify process, clarify instructions, expand functionality, condense information, reorganize layout, reformat code, rework design, redesign interface, redevelop features, refactor code, rephrase text, reword content, revise structure, update documentation, modernize approach, upgrade system, enhance user experience, boost efficiency, increase accessibility, enrich content, amplify impact, strengthen security, fortify defenses, safeguard data, protect privacy*


## Document‑Focused Prompts

**resumer un document**
- `Résumer chaque section du document en 2-3 phrases, Respecter les titres des sections telles que proposées dans le document`
- `Résumer et synthétiser chaque section du document en une liste à puces, reprenant les concepts principaux`
**fiche de révision**
`Faire une fiche de révision en une page du document`
`Faire une fiche de révision de <nom_de_la_matière> en une page sur les ...`
**convertir un document en QCM**
`Convertir le document en un QCM de 10 questions avec 4 options de réponses chacune, et indiquer la bonne réponse pour chaque question`
**expliquer un document**
`Expliquer le document à un expert dans le domaine`
`Expliquer le document en utilisant des analogies simples`
`Expliquer le document en utilisant des exemples concrets`
`Expliquer le document en utilisant des schémas ou des diagrammes`
**traduire un document**
`Traduire le document en anglais`
`Traduire le document en français`


## Markdown‑Focused Prompts

**convert a document to markdown**
`Convert this document to markdown format, preserving all headings, lists, and formatting`
**generate a markdown table of contents**
`Generate a markdown table of contents for this document, based on the headings`
**format a markdown document**
`Format this markdown document to improve readability, ensuring consistent heading levels, spacing, and list formatting`
**summarize a markdown document**
`Summarize the key points of this markdown document in a concise paragraph`
**extract code snippets from markdown**
`Extract all code snippets from this markdown document and present them in a separate section`
**convert markdown to HTML**
`Convert this markdown document to HTML format, preserving all formatting and structure`
**convert markdown to PDF**
`Convert this markdown document to PDF format, ensuring proper formatting and layout`
**convert markdown to Word**
`Convert this markdown document to latest Word format, ensuring proper formatting, structure and layout`
**generate a markdown checklist**
`Generate a markdown checklist based on the action items mentioned in this document`
**create a markdown template**
`Create a markdown template for a project README, including sections for installation, usage, and contribution guidelines`
**improve markdown formatting**
`Improve the formatting of this markdown document to enhance readability and visual appeal, ensuring consistent use of headings, lists, and code blocks. Use best practices. Justify structure and content.`
**generate a markdown summary**
`Generate a markdown summary of this document, highlighting the main points and key takeaways in a concise format`
**generate a markdown summary**
`Fix and refactor the markdown page. use best practices. justify structure and content. enhance page for better display. improve page for better readability and maintainability`

## Project Management Prompts

**Prompt 1** 
`AUDIT the codebase, RUN tests, CHECK coverage, FIX any issues or bugs, and UPDATE copilot-instructions.md accordingly.`
**Prompt 2** 
`REVIEW the current documentation, IDENTIFY gaps or outdated information, and UPDATE the relevant files accordingly.`
**Prompt 3** 
`Create folder structure and contents based on the project requirements.`
**Prompt 4** 
`Fix the checklist, remove duplicate or irrelevant items and put it in a clear and organized format, ensuring all tasks are actionable and properly categorized.`
**Prompt 5**
`Audit le site web, identifie les points à améliorer en termes de performance, sécurité, et expérience utilisateur, propose des recommandations pour les corriger et mets le rapport d'audit dans le fichier `audit.md`.`
**Prompt 6**
`Use relevant content from attached files to update accordingly.`
**Prompt 7**
`Utiliser les contenus appropriés des fichiers attachés pour créer un template de communiqué de presse.`

