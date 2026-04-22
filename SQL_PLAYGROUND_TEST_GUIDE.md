# SQL Playground - Quick Testing Guide

## Quick Start Testing

### 1. Load the Page
- Navigate to the Projects tab
- Scroll to "SQL Playground" section
- You should see "Initializing komal_portfolio_db..." loading state

**Expected Result:** Loading spinner appears, then disappears after ~2 seconds

---

## Test Queries to Try

### Basic Queries
```sql
SELECT * FROM komal;
```
**Expected:** Returns 1 row with your profile info (name, role, university, cgpa, focus_area)

```sql
SELECT hobby FROM hobbies;
```
**Expected:** Returns 6 rows with your hobbies (Poetry, Writing, Guitar, etc.)

```sql
SELECT * FROM projects;
```
**Expected:** Returns 7 rows with project details

```sql
SELECT certification FROM achievements WHERE year = 2025;
```
**Expected:** Returns certifications completed in 2025 (7 results)

### Aggregate Queries
```sql
SELECT COUNT(*) as hobby_count FROM hobbies;
```
**Expected:** Returns 1 row with value 6

```sql
SELECT category, COUNT(*) FROM skills GROUP BY category;
```
**Expected:** Returns 1 row (all skills in 1 category)

### Order By Queries
```sql
SELECT skill, level FROM skills ORDER BY level DESC;
```
**Expected:** Returns 6 rows ordered by skill level (highest first)

---

## Easter Egg Queries (Fun!)

Try these special queries - they unlock easter eggs:
```sql
SELECT future_role FROM komal
SELECT passion FROM komal
SELECT superpower FROM komal
SELECT motto FROM komal
SELECT fun_fact FROM komal
```

**Expected:** When you run one, a badge appears saying "Easter egg unlocked!" and the message displays.

---

## Error Testing

### Empty Query
- Click "Run Query" without typing anything
- **Expected:** Error: "Please enter a SQL query."

### Invalid Query
```sql
SELECT * FROM nonexistent_table;
```
- **Expected:** Error: "SQL Error — table nonexistent_table not found"

### Invalid Syntax
```sql
SELECT FROM komal WHERE;
```
- **Expected:** Error: "SQL Error — near "WHERE": syntax error"

---

## Row Numbering Test

Run this query:
```sql
SELECT certification FROM achievements;
```

**Verify:**
- [ ] First row shows "#" = 1
- [ ] Second row shows "#" = 2
- [ ] Continue for all 12 rows
- [ ] Numbers align properly with data
- [ ] No overlapping or misalignment

---

## Performance & Responsiveness Tests

### Large Result Set
```sql
SELECT * FROM achievements;
```
**Expected:** All 12 rows load smoothly with animations

### Rapid Queries
- Click multiple suggested queries quickly
- **Expected:** Each query executes without lag

### Mobile Responsiveness
- Shrink browser to mobile width (< 640px)
- Try querying
- **Expected:** Results table scrolls horizontally, readable on mobile

---

## Suggested Queries (Click These)

The interface shows these preset queries you can click:
1. `SELECT * FROM komal;`
2. `SELECT hobby FROM hobbies;`
3. `SELECT project_name, tool FROM projects;`
4. `SELECT skill FROM skills ORDER BY level DESC;`
5. `SELECT certification FROM achievements WHERE year = 2025;`
6. `SELECT project_name FROM projects WHERE tool = 'Python';`

**Test:** Click each one, verify it populates the query field and executes correctly

---

## Browser Console Debugging

Open Developer Tools (F12) and check the Console tab while:
1. Page loads → should see normal logs, no errors
2. Database initializes → should see "Initializing..." then success
3. Running queries → should see no red error messages

**What to look for:**
- ❌ Red errors about "sql-wasm.wasm" - means WASM loading failed
- ❌ "Cannot read property 'exec'" - means database not initialized
- ✅ No errors = everything working

---

## Network Tab Debugging (if needed)

If queries don't work:
1. Open DevTools → Network tab
2. Clear all requests
3. Try a query
4. Look for request to `sql.js.org`

**Expected:**
- ✅ Request to "sql-wasm.wasm" returns 200 (success)
- ✅ File size shows it's a binary (looks like gibberish in preview)

---

## Full Test Checklist

Complete this checklist to verify everything works:

### Initialization
- [ ] Page loads without errors
- [ ] Loading spinner appears
- [ ] Database initializes in ~2 seconds
- [ ] No error messages in console

### Basic Functionality
- [ ] "SELECT * FROM komal;" returns correct data
- [ ] "SELECT hobby FROM hobbies;" returns 6 rows
- [ ] Row numbering displays correctly (1-6)
- [ ] Results show in table format

### Query Types
- [ ] SELECT queries work
- [ ] WHERE clauses work
- [ ] ORDER BY works
- [ ] COUNT() aggregate works
- [ ] GROUP BY works

### Error Handling
- [ ] Empty query shows friendly error
- [ ] Invalid table shows SQL error
- [ ] Invalid syntax shows SQL error
- [ ] All errors are readable

### Easter Eggs
- [ ] At least one easter egg query works
- [ ] Badge appears saying "Easter egg unlocked!"
- [ ] Easter egg message displays

### UI/UX
- [ ] Query input field is usable
- [ ] Run button is clickable and responsive
- [ ] Results display with proper formatting
- [ ] Tables are scrollable on mobile

### Performance
- [ ] Queries execute quickly (< 1 second)
- [ ] Row animations are smooth
- [ ] No lag or freezing
- [ ] Can run multiple queries in sequence

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Perpetual loading spinner | Hard refresh (Ctrl+Shift+R), clear cache, reload |
| "Database initialization failed" | Check network connectivity, try reloading |
| Queries don't execute | Check browser console for errors, verify DB initialized |
| Row numbers misaligned | Clear browser cache, hard refresh |
| Mobile looks broken | Zoom out to see full table, scroll horizontally |

---

## Success Criteria

The SQL Playground is working correctly when:

✅ Database loads without errors  
✅ Queries execute successfully  
✅ Results display with proper row numbering  
✅ Easter eggs work  
✅ Error messages are helpful  
✅ Mobile responsive layout works  
✅ No console errors  

---

**Test Duration:** ~10-15 minutes for full checklist  
**Browsers to Test:** Chrome, Firefox, Safari, Edge
