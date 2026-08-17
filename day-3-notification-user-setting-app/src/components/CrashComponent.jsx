function CrashComponent({ shouldCrash }) {
  if (shouldCrash) {
    throw new Error("Something went wrong!");
  }

  return (
    <p className="text-center text-green-600">
      Everything is working normally.
    </p>
  );
}

export default CrashComponent;
